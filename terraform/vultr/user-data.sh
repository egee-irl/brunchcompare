#!/usr/bin/env bash
set -ex
# don't surprise us with random updates mid-test
systemctl disable --now unattended-upgrades
systemctl disable --now apt-daily

apt-get install -y docker.io git

docker pull ghcr.io/egee-irl/brunchmark:botan
docker pull ghcr.io/egee-irl/brunchmark:helsing
docker pull ghcr.io/egee-irl/brunchmark:primesieve

git clone https://gist.github.com/ed4bd8e61549d77aa6b4907957a27a8f.git /tmp/brunch/
cp /tmp/brunch/runem.sh /root/runem.sh
chmod +x /root/runem.sh
mkdir -p "/root/results/$HOSTNAME/"
echo "@reboot root /root/runem.sh" > /etc/cron.d/brunchmark

# drop everything we don't need for the test
apt-get purge git -y
apt-get autoremove -y
apt-get autoclean

# vultr doesn't like reboot so we'll delay it a bit
shutdown -r