from django.urls import path
from.import views

urlpatterns = [
    path('login', views.login, name = 'login'),
    path('signup', views.signup, name = 'signup'),
    path('profile', views.profile, name = 'profile'),
    path('user_table', views.user_table, name = 'user_table'),
    path('user_update/<int:id>', views.user_update, name = 'user_update'),
    path('user_delete/<int:id>', views.user_delete, name = 'user_delete'),
    path('user_logout', views.user_logout, name = 'user_logout'),
    path('create', views.create, name = 'create'),
    path('home', views.home, name = 'home'),
]