import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.db.utils import Error
from django.http import HttpResponse, HttpResponseRedirect
from django.http.response import JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.contrib.auth.decorators import login_required

from .models import User
# Create your views here.


@login_required(login_url="/login")  
def index(request):
    return render(request, "extensionWeb/index.html")


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "extensionWeb/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "extensionWeb/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "extensionWeb/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "extensionWeb/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "extensionWeb/register.html")


@login_required(login_url='/login')
def get_user_data(request):
    songs = request.GET.get('songs')
    print('songs:', songs)

    data = {
        'songs': 'list of songs here',
    }
    
    print('json-data to be sent: ', data)
    return JsonResponse(data)