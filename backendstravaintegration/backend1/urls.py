from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("activities/", views.activities, name="activities"),
    path("create-activities/", views.create_activities, name="create_activities"),
]