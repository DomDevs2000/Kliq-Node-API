# Running the application

To run the application, run the bash script via /scripts/users.sh (note you may need to run 'chmod +x /scripts/users.sh' to make it executable)
this will run 3 commands:

1. runs a sql creation scritp to create the user, database and table
2. runs a mysql script to insert data from the csv file to the database
3. runs npm install to install all the required packages

once the project is running, you can access the application via localhost:3000/api/users

# GET /api/users

this will return all users in the database

you can query for a specific user by their first and/or last name by adding a query string to the url
e.g - localhost:3000/api/users?first_name=John
or - localhost:3000/api/users?last_name=Doe
or - localhost:3000/api/users?first_name=John&last_name=Doe

# POST /api/users

to create a new user, a post request can be made to /api/users with a json body containing the user's details
for e.g:

{

        "application_id" : "2000",
        "first_name": "John",
        "last_name": "Doe",
        "email": "John@Doe.org.uk",
        "password": "testpass",
        "phone_number": "07414114152",
        "photo_url": "https://prod-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
        "referral_url": "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png"

}
please note that there is validation on all fields, so leaving these empty will return an error stating which fields are missing
additionally, there is password hasing to ensure security when sending a password to the database

# Update /api/users

to update a user, a put request can be made to /api/users/ id (id being the the id of the user you want to update) with a json body containing the user's details, similar to the post request
e.g
{

        "application_id" : "2000",
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "Jane@Doe.org.uk",
        "password": "testpass123",
        "phone_number": "07414114152",
        "photo_url": "https://prod-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
        "referral_url": "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png"

}

# Delete /api/users

to delete a user, a delete request can be made to /api/users/ id (id being the the id of the user you want to delete)

e.g - localhost:3000/api/users/1

```

```
