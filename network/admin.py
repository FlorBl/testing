
# Register your models here.
from django.contrib import admin
from network.models import User, Post, Follower, Like

admin.site.register(User)
admin.site.register(Post)
admin.site.register(Follower)
admin.site.register(Like)