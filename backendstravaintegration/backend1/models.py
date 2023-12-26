from django.db import models

class Activity(models.Model):
    word = models.CharField(max_length=200)
    number = models.IntegerField(default=0)