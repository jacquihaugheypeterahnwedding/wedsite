import decimal
import json
import logging
import os
import pprint
import time
import boto3
from botocore.exceptions import ClientError

logger = logging.getLogger(__name__)
dynamodb = boto3.resource("dynamodb")





def scan_table(table):
    """
    Scans for table.

    :return: The list of items
    """
    items = []
    scan_kwargs = {
       # "ProjectionExpression": "#yr, title, info.rating",
       # "ExpressionAttributeNames": {"#yr": "year"},
    }
    try:
        done = False
        start_key = None
        while not done:
            if start_key:
                scan_kwargs["ExclusiveStartKey"] = start_key
            response = table.scan(**scan_kwargs)
            items.extend(response.get("Items", []))
            start_key = response.get("LastEvaluatedKey", None)
            done = start_key is None
    except ClientError as err:
        logger.error(
            "Couldn't scan. Here's why: %s: %s",
            err.response["Error"]["Code"],
            err.response["Error"]["Message"],
        )
        raise

    return items


def write_items(table, items):
    try:
        with table.batch_writer() as writer:
            for item in items:
                writer.put_item(Item=item)
    except ClientError as err:
        logger.error(
            "Couldn't load data into table %s. Here's why: %s: %s",
            table.name,
            err.response["Error"]["Code"],
            err.response["Error"]["Message"],
        )
        raise

json_file = open("../creds/aws.json")

a = json.load(json_file)
access_key_id = a["access_key_id"]
secret_access_key = a["secret_access_key"]
user_pool_id = a["user_pool_id"]
default_region = "us-east-1"

session = boto3.Session(
    aws_access_key_id=access_key_id,
    aws_secret_access_key=secret_access_key,
    region_name=default_region,
)

ddb = session.resource('dynamodb')
#table = ddb.Table('Picture-qfreaisrdrdovbptvxgz2vgmkq-test')

from_table = 'Story-dvm57envefg5pangl6iwa2jfmy-dev'
to_table = 'Story-qfreaisrdrdovbptvxgz2vgmkq-test'


items = scan_table(ddb.Table(from_table))
#print(items)
write_items(ddb.Table(to_table), items)

print('done')