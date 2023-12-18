from guests import get_guests
from aws_account import setup, create_user


#groups = get_guests()


(cognito_identity_client, user_pool_id) = setup()

create_user(cognito_identity_client, user_pool_id, 'jacquelyn.haughey@gmail.com', 'jacquelyn.haughey@gmail.com', 'password')

#for group in proups:
#    username = 

#    #create_user(cognito_identity_client, user_pool_id, username, email, password)

