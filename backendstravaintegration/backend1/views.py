from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import serializers
from . import models # to deplace later
import random

def index(request):
    return HttpResponse("Backend1 for backendstravaintegration available")

def activities(request):
    # Create a object and (save it in sqlite3)
    # new_activity = models.Activity(word="abcdefg", number=7930)
    # new_activity.save()
    
    # get all activities and serialize them
    all_activities = models.Activity.objects.all()
    # print(f"all_activities id 2 number: {all_activities.get(id=2).number}")
    test = serializers._s_activities(all_activities)
    return JsonResponse(test)

def create_activities(request):
    new_activity = models.Activity(word="not-random-text", number=random.randint(1, 1000))
    new_activity.save()
    return activities(request)