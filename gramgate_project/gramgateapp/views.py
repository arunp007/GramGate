from django.shortcuts import render, redirect
from django.http import HttpResponse
from.models import *
from random import random
from django.core.files.storage import FileSystemStorage


def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
    
    try: 
        current_user = Signup.objects.get(email = email, password = password)
        request.session['xyz'] = current_user.id
        return redirect('home')
    
    except Signup.DoesNotExist:
        return render(request, 'login.html', {'message': "Email And Password Is Wrong"})
    

def signup(request):
    if request.method == 'POST':
        fname = request.POST['fullname']
        uname = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        phone = request.POST['phone']
        gender = request.POST['gender']
        image = request.FILES['image']
        bio = request.POST['bio']
        website = request.POST['website']
        category = request.POST['category']
        file_name = str(random())+image.name
        image.name = file_name
        file_object = FileSystemStorage()
        file_object.save(file_name, image)
        object_details = Signup(fname = fname, uname = uname, email = email, password = password, phone = phone, gender = gender, image = image, bio = bio, website = website, category = category)
        object_details.save()
    return render(request, 'signup.html')

def user_table(request):
    user_data = Signup.objects.all()
    return render(request, 'user_table.html', {'user': user_data})

def user_update(request, id):
    user_data = ''
    if request.method == 'POST':
        fname = request.POST['fullname']
        uname = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        phone = request.POST['phone']
        gender = request.POST['gender']
        image = request.FILES['image']
        bio = request.POST['bio']
        website = request.POST['website']
        category = request.POST['category']
        Signup.objects.filter(id = id).update(fname = fname, uname = uname, email = email, password = password, phone = phone, gender = gender, image = image, bio = bio, website = website, category = category)
        return redirect('user_table')
    
    else:
        update_data = Signup.objects.get(id = id)
    return render(request, 'signup.html', {'update' : update_data})


def user_delete(request, id):
    Signup.objects.get(id = id).delete()
    return redirect('user_table')

def user_logout(request):
    request.session.flush()
    return redirect('login')

def profile(request):
    image = Signup.objects.all()
    post_data = Post.objects.all()
    return render(request, 'profile.html', {'profile': image, 'post': post_data})

def create(request):
    if request.method == 'POST':
        image = request.FILES['image']
        description = request.POST['description']
        file_name = str(random())+image.name
        image.name = file_name
        file_object = FileSystemStorage()
        file_object.save(file_name,image)
        object_details = Post(image = image, description = description)
        object_details.save()
    return render(request, 'create.html')

def home(request):
    post_data = Post.objects.all()
    user_details = Signup.objects.all()
    return render(request, 'home.html', {'post': post_data, 'user1': user_details})