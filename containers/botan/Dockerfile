FROM debian:11-slim
ENV DEBIAN_FRONTEND=noninteractive
ARG PKGS="git build-essential python-is-python3"
RUN apt-get update && apt-get install -y ${PKGS}
RUN git clone https://github.com/randombit/botan.git /build/
WORKDIR "/build/"
RUN ./configure.py
RUN make -j 4
RUN make install
RUN apt-get purge -y ${PKGS} && apt-get autoremove -y && rm -rf /var/lib/apt/lists/*
ENTRYPOINT [ "./botan" ]