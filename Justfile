
build_path = 'public'
domain = 'anna.eevert.love'

default:
  just -l

install:
  npm install -g gatsby-cli surge

dev:
  gatsby develop

build:
  gatsby build

deploy: build
  surge --project {{build_path}} --domain {{domain}}
