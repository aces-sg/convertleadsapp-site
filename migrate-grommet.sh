#!/bin/bash

# Script to batch migrate Grommet components to native HTML/Tailwind

# Find all files with Grommet imports
FILES=$(grep -rl "from ['\"']grommet['\"']" src --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js")

for file in $FILES; do
  echo "Processing: $file"

  # Remove common Grommet imports from import statements
  sed -i.bak 's/import { Box, /import { /g' "$file"
  sed -i.bak 's/import { Button, /import { /g' "$file"
  sed -i.bak 's/import { Text, /import { /g' "$file"
  sed -i.bak 's/import { Heading, /import { /g' "$file"
  sed -i.bak 's/import { Paragraph, /import { /g' "$file"
  sed -i.bak 's/, Box,/, /g' "$file"
  sed -i.bak 's/, Button,/, /g' "$file"
  sed -i.bak 's/, Text,/, /g' "$file"
  sed -i.bak 's/, Heading,/, /g' "$file"
  sed -i.bak 's/, Paragraph,/, /g' "$file"
  sed -i.bak 's/, Box }/}/g' "$file"
  sed -i.bak 's/, Button }/}/g' "$file"
  sed -i.bak 's/, Text }/}/g' "$file"
  sed -i.bak 's/, Heading }/}/g' "$file"
  sed -i.bak 's/, Paragraph }/}/g' "$file"

  # Remove empty imports
  sed -i.bak 's/import { } from .grommet.;//g' "$file"
  sed -i.bak 's/import { } from "grommet";//g' "$file"
  sed -i.bak "s/import { } from 'grommet';//g" "$file"

  # Clean up backup files
  rm -f "${file}.bak"
done

echo "Migration complete! Review changes and manually update JSX as needed."
