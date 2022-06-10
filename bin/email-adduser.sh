#!/usr/bin/env bash
USER_NAME=$1
PASSWORD=$2
sudo doveadm pw -s SHA512-CRYPT -p "$PASSWORD" -r 5000