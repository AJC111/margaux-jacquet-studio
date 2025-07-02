import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { pageAccueil } from './schemaTypes/pageAccueil'
import { prestation } from './schemaTypes/prestation'
import { aPropos } from './schemaTypes/aPropos'
import { avisClient } from './schemaTypes/avisClient'
import { carouselImage } from './schemaTypes/carousel'
import { planning } from './schemaTypes/planning'
import { reservation } from './schemaTypes/reservation'

export default defineConfig({
  name: 'default',
  title: 'margaux-jacquet',
  apiVersion: '2023-05-20',

  projectId: 'ujmup2s8',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      pageAccueil,
      prestation,
      aPropos,
      avisClient,
      carouselImage,
      planning,
      reservation,
    ],
  },
})
