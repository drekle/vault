---
layout: "docs"
page_title: "Vault Agent Auto-Auth AliCloud Method"
sidebar_current: "docs-agent-autoauth-methods-alicloud"
description: |-
  AliCloud Method for Vault Agent Auto-Auth
---

# Vault Agent Auto-Auth AliCloud Method 

The `alicloud` method performs authentication against the [AliCloud Auth
method](https://www.vaultproject.io/docs/auth/alicloud.html).

## Credentials

The Vault agent will use the first credential it can successfully obtain in the following order:

1. [Env variables](https://github.com/aliyun/alibaba-cloud-sdk-go/blob/master/sdk/auth/credentials/providers/env.go)
2. A static credential configuration
3. Instance metadata (recommended)

Wherever possible, we recommend using instance metadata for credentials. These rotate every hour
and require no effort on your part to provision, making the most secure of the three methods. If 
using instance metadata and custom `cred_check_freq_seconds`, be sure the frequency is set for 
less than an hour, because instance metadata credentials expire every hour.

Environment variables are given first precedence to provide the ability to quickly override your
configuration.

## Configuration

### General

- `role` `(string: required)` - The role to authenticate against on Vault.

- `region` `(string: required)` - The AliCloud region in which the Vault agent resides. Example: "us-west-1".

- `cred_check_freq_seconds` `(integer: optional)` - In seconds, how frequently the Vault agent should check for new credentials.

### Optional Static Credential Configuration (Not Preferred)

If instance metadata is not available, you may provide credential information through the parameters below.

- `access_key` `(string: optional)` - The access key to use.

- `secret_key` `(string: optional)` - The secret key to use.

- `access_token` `(string: optional)` - The access token to use.

- `role_arn` `(string: optional)` - The role ARN to use.

- `role_session_name` `(string: optional)` - The role session name to use.

- `role_session_expiration` `(string: optional)` - The role session expiration to use.

- `private_key` `(string: optional)` - The private key to use.

- `public_key_id` `(string: optional)` - The public key ID to use.

- `session_expiration` `(string: optional)` - The session expiration to use.

- `role_name` `(string: optional)` - The role name to use.