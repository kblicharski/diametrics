# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-29 00:36
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('diabetes_stats', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloodglucoseevent',
            name='user_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='diabetes_stats.UserProfile'),
        ),
        migrations.AlterField(
            model_name='exerciseevent',
            name='user_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='diabetes_stats.UserProfile'),
        ),
        migrations.AlterField(
            model_name='foodevent',
            name='user_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='diabetes_stats.UserProfile'),
        ),
    ]