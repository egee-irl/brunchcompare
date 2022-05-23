terraform {
  backend "s3" {
    bucket = "eg-tfstate"
    key    = "brunchmark-vultr.tfstate"
    region = "us-west-2"
  }
  required_providers {
    vultr = {
      source = "vultr/vultr"
    }
  }
}

variable "VULTR_API_KEY" { }
provider "vultr" {
  api_key = var.VULTR_API_KEY
}

