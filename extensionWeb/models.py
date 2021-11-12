from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# Create your models here.

class User(AbstractUser):
    
    def __str__(self):
        return f"{self.username}"


class SongsList(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")
    songURL = models.CharField(max_length=32, default=None)

    def __str__(self):
        return f"{self.user}: {self.songURL}"

    def serialize(self):
        return {
            "userID" : self.user.id,
            "songURL" : self.songURL,
        }