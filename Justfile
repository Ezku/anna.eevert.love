
build_path = 'public'
site_id = 'anna-eevert-love'

default:
  just -l

install:
  npm install -g gatsby-cli netlify-cli

dev:
  gatsby develop

clean:
  rm -rf {{build_path}}/*

build: clean
  gatsby build

deploy: build
  netlify deploy --path {{build_path}} --site-id {{site_id}}
