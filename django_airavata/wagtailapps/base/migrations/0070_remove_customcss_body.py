# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-04-03 17:00
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('django_airavata_wagtail_base', '0069_auto_20180403_1635'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customcss',
            name='body',
        ),
    ]
