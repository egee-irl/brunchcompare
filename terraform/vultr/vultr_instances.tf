locals {
  region = "sea"
  os_id  = "1743" # Ubuntu 22.04 LTS
  type_1 = "vc2-2c-4gb"
  type_2 = "vhf-2c-4gb"
  type_3 = "vhp-2c-4gb-amd"
  type_4 = "vhp-2c-4gb-intel"
}

resource "vultr_startup_script" "brunchmark_debian" {
  name = "Brunchmark: Debian"
  script = base64encode(file("user-data.sh"))
}

resource "vultr_ssh_key" "key" {
  name = "temp-key"
  ssh_key = file("~/.ssh/id_rsa.pub")
}

# could also create these instances & outputs from a common loop but ehh..
resource "vultr_instance" "brunchmark_1" {
  script_id        = vultr_startup_script.brunchmark_debian.id
  ssh_key_ids      = [vultr_ssh_key.key.id]
  plan             = local.type_1
  region           = local.region
  os_id            = local.os_id
  hostname         = "brunchmark-1"
  label            = "brunchmark-1"
  depends_on       = [vultr_startup_script.brunchmark_debian] # ensure's our instances always get the latest userdata
}

resource "vultr_instance" "brunchmark_2" {
  script_id        = vultr_startup_script.brunchmark_debian.id
  ssh_key_ids      = [vultr_ssh_key.key.id]
  plan             = local.type_2
  region           = local.region
  os_id            = local.os_id
  hostname         = "brunchmark-2"
  label            = "brunchmark-2"
  enable_ipv6      = true
  depends_on       = [vultr_startup_script.brunchmark_debian]
}

resource "vultr_instance" "brunchmark_3" {
  script_id        = vultr_startup_script.brunchmark_debian.id
  ssh_key_ids      = [vultr_ssh_key.key.id]
  plan             = local.type_3
  region           = local.region
  os_id            = local.os_id
  hostname         = "brunchmark-3"
  label            = "brunchmark-3"
  enable_ipv6      = true
  depends_on       = [vultr_startup_script.brunchmark_debian]
}

resource "vultr_instance" "brunchmark_4" {
  script_id        = vultr_startup_script.brunchmark_debian.id
  ssh_key_ids      = [vultr_ssh_key.key.id]
  plan             = local.type_4
  region           = local.region
  os_id            = local.os_id
  hostname         = "brunchmark-4"
  label            = "brunchmark-4"
  enable_ipv6      = true
  depends_on       = [vultr_startup_script.brunchmark_debian]
}

output "brunchmark_1" {
  value = vultr_instance.brunchmark_1.main_ip
}

output "brunchmark_2" {
  value = vultr_instance.brunchmark_2.main_ip
}

output "brunchmark_3" {
  value = vultr_instance.brunchmark_3.main_ip
}

output "brunchmark_4" {
  value = vultr_instance.brunchmark_4.main_ip
}
