# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-29 01:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diabetes_stats', '0002_auto_20171028_1936'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='username',
            field=models.CharField(default='scooby', max_length=50),
            preserve_default=False,
        ),
    ]
