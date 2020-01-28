#!/usr/bin/env node
import { rf } from './rf';
import { rt } from './rt';
import consola from 'consola';

const command = process.argv[2];
const argv = process.argv.filter((_, i) => i > 2);

async function run() {
  switch (command) {
    case 'rf': {
      await rf(argv).catch(e => {
        throw new Error(e);
      });
      break;
    }

    case 'rt': {
      await rt(argv).catch(e => {
        throw new Error(e);
      });
      break;
    }

    default: {
      throw new Error(`Missing command '${command}'`);
    }
  }
}

run().catch(e => {
  const message = e instanceof Error ? e.message : e?.text || e;
  consola.error(message);
  process.exit(1);
});
