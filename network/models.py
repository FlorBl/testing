from django.contrib.auth.models import AbstractUser
from django.db import models
import datetime


class User(AbstractUser):
    profile_image = models.ImageField(null=True, blank=True, upload_to="images/")
    cover_image = models.ImageField(null=True, blank=True, upload_to="cover/",default="cover/network.jpg")
    bio = models.CharField(max_length=100, blank=True,default='Hello, im new!')
    
class Post(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=160, default=None)
    post_date = models.DateTimeField(default=datetime.datetime.now)
    def __str__(self):
        return f"{self.user} to {self.text}"


class Follower(models.Model):
    follower = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='follower', default=None)
    following = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='following', default=None)

    class Meta:
        unique_together = (('follower', 'following'),)
    def __str__(self):
            return f"{self.follower} : {self.following}"


class Like(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, default=None)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)

    class Meta:
        unique_together = (('post', 'user'),)

    def __str__(self):
        return f"{self.post} : {self.user}"


# This will allow us to upload an image or not. Depending what we want
# Usually we never upload our images to our Database. Even Heroku deletes our images in our databse.
# Normally we can host these image somewhere else but for now we'll save them inside a directory.
# Since presently we don't have an "/images directory", it will create itself.
# Pillow library is required.

# header_image = models.ImageField(null=True, blank=True,upload_to="images/")

# ('header_image', models.ImageField(blank=True, null=True, upload_to="images/")),