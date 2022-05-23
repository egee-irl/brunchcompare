FROM debian:11-slim
ENV DEBIAN_FRONTEND=noninteractive
ARG PKGS="git build-essential cmake"
RUN apt-get update && apt-get install -y ${PKGS}
RUN git clone https://github.com/kimwalisch/primesieve.git /build/
WORKDIR "/build/"
RUN cmake . && make && ldconfig
RUN apt-get purge -y ${PKGS} && apt-get autoremove -y && rm -rf /var/lib/apt/lists/*
ENTRYPOINT [ "./primesieve" ]
# -test