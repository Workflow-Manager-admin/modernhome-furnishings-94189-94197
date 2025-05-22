#!/bin/bash
cd /home/kavia/workspace/code-generation/modernhome-furnishings-94189-94197/main_container_for_modernhome_furnishings
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

