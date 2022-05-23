FROM debian:11-slim
ENV DEBIAN_FRONTEND=noninteractive
ARG PKGS="git build-essential libssl-dev"
RUN apt-get update && apt-get install -y ${PKGS} 
RUN git clone https://github.com/plerros/helsing.git /build/
WORKDIR "/build/helsing"
RUN make
RUN apt-get purge -y ${PKGS} && apt-get autoremove -y && rm -rf /var/lib/apt/lists/*
ENTRYPOINT [ "./helsing" ]