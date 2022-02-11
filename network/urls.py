from django.conf import settings
from django.urls import include, path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("welcome", views.welcome, name="welcome1"),
    path("welcome2", views.welcome2, name="welcome2"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("following", views.following, name="following"),
    path("post-message", views.postmessage, name="postmessage"),
    path("like/<int:id>", views.like, name="like"),
    path("profile/<str:username>", views.profile, name="profile"),
    path("follow/<int:id>", views.follow, name="follow"),
    path("editpost/<int:id>", views.editpost, name="editpost"),
    path("test", views.test, name="test"),
    path("updateInfo", views.updateInfo, name="updateInfo")

]

