from django.db import models

class Signup(models.Model):
    fname = models.TextField(max_length=50)
    uname = models.TextField(max_length=50)
    email = models.TextField(max_length=50)
    password = models.TextField(max_length=50)
    phone = models.TextField(max_length=50)
    gender = models.TextField(max_length=50)
    image = models.CharField(max_length=100)
    bio = models.TextField(max_length=100)
    website = models.TextField(max_length=100)
    category = models.TextField(max_length=50)

class Meta:
    db_table = 'user_registration'


class Post(models.Model):
    image = models.CharField(max_length=100)
    description = models.TextField(max_length=150)

class Meta:
    db_table = 'user_post'
