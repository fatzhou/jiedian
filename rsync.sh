#!/bin/bash


npm run build && rsync -r dist/* root@47.93.252.197:/home/wwwroot/default/
