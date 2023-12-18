import smtplib
from email.mime.text import MIMEText

import json

json_file = open("../creds/google.json")

a = json.load(json_file)

subject = "Email Subject1"
body = "This is the body of the text message"
sender = "jacquihaugheypeterahnwedding@gmail.com"
recipients = ["jacqui.nerd@gmail.com"]
password = a["password"]





def send_email(subject, body, sender, recipients, password):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = ', '.join(recipients)
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
       smtp_server.login(sender, password)
       smtp_server.sendmail(sender, recipients, msg.as_string())
    print("Message sent!")


send_email(subject, body, sender, recipients, password)