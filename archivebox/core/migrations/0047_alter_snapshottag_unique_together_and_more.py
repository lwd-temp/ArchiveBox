# Generated by Django 5.0.6 on 2024-08-20 02:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0046_alter_archiveresult_snapshot_alter_snapshot_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='archiveresult',
            name='snapshot',
            field=models.ForeignKey(db_column='snapshot_id', on_delete=django.db.models.deletion.CASCADE, to='core.snapshot', to_field='id'),
        ),
        migrations.AlterField(
            model_name='snapshottag',
            name='tag',
            field=models.ForeignKey(db_column='tag_id', on_delete=django.db.models.deletion.CASCADE, to='core.tag'),
        ),
    ]
