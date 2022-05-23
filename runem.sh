#!/usr/bin/bash
# each test contains it's own internal test metric but
# timing the result is simpiler to extrapolate & present
fallocate -l 2G /root/botan.img
for i in {1..500} ; do
  start=$(date +%s.%N)
  docker run --rm -v /root/botan.img:/botan.img ghcr.io/egee-irl/brunchmark:botan hash --algo=SHA-256 --buf-size=4096 --no-fsname /botan.img >> "/root/results/$HOSTNAME/botan.log" 2>&1
  end=$(date +%s.%N)
  echo "Test Run $i Elapsed Seconds: $( echo "$end - $start" | bc -l | awk '{printf "%.3f\n", $0}' )" >> "/root/results/$HOSTNAME/botan.log"
  sleep 2
done
for i in {1..500} ; do
  start=$(date +%s.%N)
  docker run --rm ghcr.io/egee-irl/brunchmark:primesieve --test >> "/root/results/$HOSTNAME/primesieve.log" 2>&1
  end=$(date +%s.%N)
  echo "Test Run $i Elapsed Seconds: $( echo "$end" - "$start" | bc -l | awk '{printf "%.3f\n", $0}' )" >> "/root/results/$HOSTNAME/primesieve.log"
  sleep 2
done
for i in {1..500} ; do
  start=$(date +%s.%N)
  docker run --rm ghcr.io/egee-irl/brunchmark:helsing -l 10 -u 999999999999 >> "/root/results/$HOSTNAME/helsing.log" 2>&1
  end=$(date +%s.%N)
  echo "Test Run $i Elapsed Seconds: $( echo "$end - $start" | bc -l | awk '{printf "%.3f\n", $0}' )" >> "/root/results/$HOSTNAME/helsing.log"
  sleep 2
done