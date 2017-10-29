
build_path = 'public'
domain = 'anna.eevert.love'

install:
  npm install -g gatsby-cli surge

dev:
  gatsby develop

build:
  gatsby build

deploy:
  surge --project {{build_path}} --domain {{domain}}
