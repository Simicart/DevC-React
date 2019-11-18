# Hướng dẫn cài đặt môi trường Node, Yarn
## 1. Cài đặt NVM:

Cài đặt NVM tại (https://github.com/nvm-sh/nvm)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

Thêm các dòng code sau vào các file: ```~/.bash_profile```, ```~/.zshrc```, ```~/.profile```, or ```~/.bashrc```

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

## 2. Cài đặt Node

```
nvm install 10.16.0
```
hoặc xem các version khác:
```
nvm ls-remote
```

lựa chọn node version đã cài đặt muốn sử dụng:

```
nvm use 10.16.0
```

## 3. Cài đặt Yarn 1.17.3

```
curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.17.3
```
Xem các version thông qua link: https://github.com/yarnpkg/yarn/releases

Nếu cài đặt mà không tìm thấy path thì thêm vào các file các dòng code sau: ```~/.bash_profile```, ```~/.zshrc```, ```~/.profile```, or ```~/.bashrc```

```
export PATH="$PATH:/opt/yarn-1.17.3/bin"
```


# siminia

## 1. Clone pwa-studio
```
git clone https://github.com/magento-research/pwa-studio/
cd pwa-studio
git checkout v3.0.0
cp packages/venia-concept/.env.dist packages/venia-concept/.env
```

## 2. Modify package.json

workspaces:
```

  "workspaces": [
...
    "packages/upward-spec",
    #add siminia package
    "packages/siminia"
  ],

```

scripts:

```
  "scripts": {
	...
    "watch:venia": "yarn workspace @magento/venia-concept run watch; cd - >/dev/null",
    "watch:siminia": "yarn workspace @simicart/siminia run watch; cd - >/dev/null",
    "stage:siminia": "yarn workspace @simicart/siminia run start; cd - >/dev/null"
  },
```
## 3. Clone siminia
```
cd  packages
git clone https://github.com/Simicart/siminia-public siminia
cd ..
yarn install
yarn run build
```
## 4. Run watch/stage
To run watch
```
yarn run watch:siminia
```
To run production
```
NODE_ENV=production PORT=8080 npm run stage:siminia
```
