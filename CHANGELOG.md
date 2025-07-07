# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/) using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Since `v4.6.0`, we have switched to automated releases and this file does not need to be manually updated.

## [4.14.0](https://github.com/zkrige/nw-builder/compare/v4.13.14...v4.14.0) (2025-07-07)


### Features

* add `get` mode ([d34580e](https://github.com/zkrige/nw-builder/commit/d34580e5d28fd6355c582f1ee36552eef99ace78))
* add `glob` flag ([#829](https://github.com/zkrige/nw-builder/issues/829)) ([d55c1a3](https://github.com/zkrige/nw-builder/commit/d55c1a37ba3b551e0996f5f27087b2eeee8848d8))
* add macos arm support ([#783](https://github.com/zkrige/nw-builder/issues/783)) ([de90708](https://github.com/zkrige/nw-builder/commit/de9070805ae98d82ef5bb184b110f5faa36e06bb))
* **bld:** add languageCode option for Windows ([#1175](https://github.com/zkrige/nw-builder/issues/1175)) ([96ad585](https://github.com/zkrige/nw-builder/commit/96ad585ec170416d31248ccf3503191831e802b0))
* **bld:** add NSLocalNetworkUsageDescription option for MacOS ([#1236](https://github.com/zkrige/nw-builder/issues/1236)) ([eea3f69](https://github.com/zkrige/nw-builder/commit/eea3f69ee1951e24f4fbc8d1550b0bee1e43951f)), closes [#1235](https://github.com/zkrige/nw-builder/issues/1235)
* **bld:** rename MacOS Helper apps ([#1206](https://github.com/zkrige/nw-builder/issues/1206)) ([9f3b30f](https://github.com/zkrige/nw-builder/commit/9f3b30f9e04c2d2d103f5ec19078c0a14fbf12f7))
* **build:** add managed manifest ([#965](https://github.com/zkrige/nw-builder/issues/965)) ([efb17e9](https://github.com/zkrige/nw-builder/commit/efb17e9af74a655494f3f717fe98fdbd9c9b8ec7))
* **build:** node native addon support via gyp ([#964](https://github.com/zkrige/nw-builder/issues/964)) ([b55f200](https://github.com/zkrige/nw-builder/commit/b55f200550ad0fe63682f8c4debe01b87e3d2203))
* compress to `zip`, `tar` and `tgz` formats ([#890](https://github.com/zkrige/nw-builder/issues/890)) ([b825fed](https://github.com/zkrige/nw-builder/commit/b825fed7fd122a63cb3b53060c29abfc170d1470))
* **get:** add options.shaSum to enable/disable shasum checks ([#1307](https://github.com/zkrige/nw-builder/issues/1307)) ([98abcaf](https://github.com/zkrige/nw-builder/commit/98abcafeb884a42c34208a6a83f37eb7d518122c))
* **get:** align cache impl with `nwjs/npm-installer` ([#967](https://github.com/zkrige/nw-builder/issues/967)) ([efa46b8](https://github.com/zkrige/nw-builder/commit/efa46b8c681948986548cd0805823eeb2a3c8e00))
* **get:** set `cacheDir` on another volume ([#1023](https://github.com/zkrige/nw-builder/issues/1023)) ([7c0f711](https://github.com/zkrige/nw-builder/commit/7c0f711d407c4f992e7897e9d590f03d3105db4e)), closes [#1017](https://github.com/zkrige/nw-builder/issues/1017)
* **get:** support `file://` for `options.downloadUrl` ([094567c](https://github.com/zkrige/nw-builder/commit/094567c1192c66465fb8ed43d6e5b6f0ed7cfdec))
* **get:** verify sha256 checksum ([#1201](https://github.com/zkrige/nw-builder/issues/1201)) ([810944d](https://github.com/zkrige/nw-builder/commit/810944da14ffc97d8fb2b5d78d7c8d09ad514226))
* integrate ffmpeg ([#802](https://github.com/zkrige/nw-builder/issues/802)) ([3136569](https://github.com/zkrige/nw-builder/commit/31365695c04aee2a4704f289b47e041a4d7ea38e))
* **run:** return NW.js process reference ([#1304](https://github.com/zkrige/nw-builder/issues/1304)) ([bd2f926](https://github.com/zkrige/nw-builder/commit/bd2f9263d6bf61a98db2e0ec14c5d0ca68aa4b0f))
* specify log level via `options.logLevel` ([#892](https://github.com/zkrige/nw-builder/issues/892)) ([078a82e](https://github.com/zkrige/nw-builder/commit/078a82ed4aaf46c4e26fa72a323e1795a70a947a))
* update `MacOS` metadata ([#894](https://github.com/zkrige/nw-builder/issues/894)) ([6087691](https://github.com/zkrige/nw-builder/commit/6087691c51bbf0946a0c99d01901773acbda0189))


### Bug Fixes

* `MacOS` icon and unofficial `MacOS` arm build ([#896](https://github.com/zkrige/nw-builder/issues/896)) ([eba33cc](https://github.com/zkrige/nw-builder/commit/eba33cc6dc7887038159de72e8d2e0718e130d64))
* 716: warn about loss of file permissions ([8793d4b](https://github.com/zkrige/nw-builder/commit/8793d4bf06288199fcaff340fda43c1e2fbcacbc))
* 753: prevent duplicate globing ([07901c9](https://github.com/zkrige/nw-builder/commit/07901c9e3930481ead0977b9be731765df28c087))
* 760: error with version=latest ([33ef184](https://github.com/zkrige/nw-builder/commit/33ef184467f78fed94541e876da042b4ed99d443))
* add back globing ([#749](https://github.com/zkrige/nw-builder/issues/749)) ([6edff46](https://github.com/zkrige/nw-builder/commit/6edff465de473bb6b3d5edd33495f2e8461e1b38))
* allow list specific mirrors ([bf7a53d](https://github.com/zkrige/nw-builder/commit/bf7a53d69bfed59cc5f0833c50e91fca067b9a71)), closes [#808](https://github.com/zkrige/nw-builder/issues/808)
* await platform-specific config ([#794](https://github.com/zkrige/nw-builder/issues/794)) ([082a436](https://github.com/zkrige/nw-builder/commit/082a4361e208f2bcc9b9fbffe8f11efff29660c1))
* **bld:** await archiver.finalize ([#1333](https://github.com/zkrige/nw-builder/issues/1333)) ([580668f](https://github.com/zkrige/nw-builder/commit/580668f7a56d050d43078c7e0014eacdc3ee7dfc)), closes [#1328](https://github.com/zkrige/nw-builder/issues/1328)
* **bld:** correct fs.promises.copyFile function call ([63fd422](https://github.com/zkrige/nw-builder/commit/63fd422575828dd6be43455e4274abadb4240fbe))
* **bld:** disable rebuilding Node addons ([464dca2](https://github.com/zkrige/nw-builder/commit/464dca25759c1ae6960977b1e83bdf03b57d2bb2))
* **bld:** fs.promises.copyFile -&gt; fs.promises.cp ([c1909c7](https://github.com/zkrige/nw-builder/commit/c1909c7d84e1513339625667fc6cab1525677f3b))
* **bld:** maintain cwd when using managedManifest or nativeAddon ([#1187](https://github.com/zkrige/nw-builder/issues/1187)) ([40223db](https://github.com/zkrige/nw-builder/commit/40223db6af75651618df7f3099b99191faa11f24)), closes [#1186](https://github.com/zkrige/nw-builder/issues/1186)
* **bld:** parse options.app.icon correctly during build mode ([bd0ef96](https://github.com/zkrige/nw-builder/commit/bd0ef96f50660be90398e1075434ef003112bbc5))
* **bld:** pass nw manifest correctly when managedManifest is true ([#1176](https://github.com/zkrige/nw-builder/issues/1176)) ([949c4b7](https://github.com/zkrige/nw-builder/commit/949c4b70b89cc96ee98d88b910caa833eb99d385))
* **bld:** resolve undefined reference ([#1127](https://github.com/zkrige/nw-builder/issues/1127)) ([006b517](https://github.com/zkrige/nw-builder/commit/006b517be0420e08134b5670e5d62a91f8b9107c)), closes [#1125](https://github.com/zkrige/nw-builder/issues/1125)
* **bld:** set product_string property in manifest to rename MacOS Helper apps ([#1290](https://github.com/zkrige/nw-builder/issues/1290)) ([b1caad7](https://github.com/zkrige/nw-builder/commit/b1caad7343c95f8f37251f3b3132f86adc31f38a)), closes [#1286](https://github.com/zkrige/nw-builder/issues/1286)
* **bld:** use fs.promises.copyFile to copy app files in build mode with glob enabled ([e1843f0](https://github.com/zkrige/nw-builder/commit/e1843f00c6f2ec389933565ba0b3975c2c93bc23))
* **build:** do not copy first package.json encountered to root of options.outDir when options.glob is enabled ([dac3b4a](https://github.com/zkrige/nw-builder/commit/dac3b4a47d697b8019e0053dea5cc35a09d73135))
* change manifest cache impl ([#888](https://github.com/zkrige/nw-builder/issues/888)) ([3bb9489](https://github.com/zkrige/nw-builder/commit/3bb9489bddd8a6bb7f4e70210e109f425b23162a))
* **ci:** give release please write permissions ([920e4a0](https://github.com/zkrige/nw-builder/commit/920e4a02863d71d0acac374678d3c017070a1e9f))
* **cli:** add missing options managedManifest and nodeAddon ([#1084](https://github.com/zkrige/nw-builder/issues/1084)) ([f6ced81](https://github.com/zkrige/nw-builder/commit/f6ced81d1e9b2b862fd916fcb7432a0d53881039))
* **cli:** convert `srcDir` array to string ([1a699af](https://github.com/zkrige/nw-builder/commit/1a699af300782e0847333bb7ad945dbde8940350))
* **cli:** disallow unknown options ([#1079](https://github.com/zkrige/nw-builder/issues/1079)) ([5d54d8c](https://github.com/zkrige/nw-builder/commit/5d54d8c20927c5dfabacc128d1cee036a7cf6fb5))
* **cli:** handle boolean type options correctly ([#1255](https://github.com/zkrige/nw-builder/issues/1255)) ([524fe34](https://github.com/zkrige/nw-builder/commit/524fe34438493d3aa0f4236741d91462cfb068e3)), closes [#1277](https://github.com/zkrige/nw-builder/issues/1277)
* **cli:** use asterisk import to import `yargs/helpers` ([#998](https://github.com/zkrige/nw-builder/issues/998)) ([c154fc8](https://github.com/zkrige/nw-builder/commit/c154fc8a2c020311610897485259c3b2b44a2259))
* **codeql:** address code scanning alerts ([#1360](https://github.com/zkrige/nw-builder/issues/1360)) ([10cb3ba](https://github.com/zkrige/nw-builder/commit/10cb3baa94803bcf0e119333a0c253e14f8bf00f))
* **compressing:** use `yauzl-promise` if platform and build is MacOS ([#973](https://github.com/zkrige/nw-builder/issues/973)) ([7abc6c7](https://github.com/zkrige/nw-builder/commit/7abc6c7d457c6b7171faaffe0ae0e250716b1ad7))
* copy ffmpeg to correct path after extract ([#918](https://github.com/zkrige/nw-builder/issues/918)) ([675ca68](https://github.com/zkrige/nw-builder/commit/675ca686a397a09b5cb5bfac6cec406610013857))
* copy nw and app files correctly ([f1ce19f](https://github.com/zkrige/nw-builder/commit/f1ce19fea8baf400334c445229b168493ff9dfab)), closes [#806](https://github.com/zkrige/nw-builder/issues/806)
* correct notify util ([#767](https://github.com/zkrige/nw-builder/issues/767)) ([5fa3582](https://github.com/zkrige/nw-builder/commit/5fa358292a90fbb8b06342b244a6a72e10ba75d3))
* correct nwbuild validation logic ([#769](https://github.com/zkrige/nw-builder/issues/769)) ([81b4c61](https://github.com/zkrige/nw-builder/commit/81b4c61e2be4eb8022af99b4f9f3a3e7ac08b601))
* create `cacheDir` and `outDir` before getting release info ([#772](https://github.com/zkrige/nw-builder/issues/772)) ([15b94c0](https://github.com/zkrige/nw-builder/commit/15b94c0ca6f5eeceef854987decbad654cb67adc))
* **decompress:** migrate from `decompress` from to `compressing` ([#879](https://github.com/zkrige/nw-builder/issues/879)) ([fddf6fa](https://github.com/zkrige/nw-builder/commit/fddf6fa73ee77ebd6fe0aa0a59b3a733cb427ecd))
* **docs:** base config ([1211abf](https://github.com/zkrige/nw-builder/commit/1211abfc3068068be9ac0390610a507ea5fb18ae))
* **docs:** changelog, docs, release ([2b54f18](https://github.com/zkrige/nw-builder/commit/2b54f1854a87e4cc5360d5a3193091a697b05773))
* **docs:** use base URL ([fca0595](https://github.com/zkrige/nw-builder/commit/fca0595853c273b5f7bfe42c7dfb2d881889fe7c))
* execute postinstall script iff in development mode ([#1132](https://github.com/zkrige/nw-builder/issues/1132)) ([3c68216](https://github.com/zkrige/nw-builder/commit/3c682167369248e96ed48ea06163169805fcedda))
* ffmpeg path on some macos envs ([#922](https://github.com/zkrige/nw-builder/issues/922)) ([40b8e59](https://github.com/zkrige/nw-builder/commit/40b8e593b6abec65b4b833138825d9c1be89b6fb))
* file globbing ([#818](https://github.com/zkrige/nw-builder/issues/818)) ([7336912](https://github.com/zkrige/nw-builder/commit/7336912e9a8a9a186674979b030a4ee124eb38b0))
* file globing ([#785](https://github.com/zkrige/nw-builder/issues/785)) ([38dc4a6](https://github.com/zkrige/nw-builder/commit/38dc4a6798d2a70ccd5cf63e09e5584910cd0b6f))
* **fs:** preserve relative symbolic links by adding `verbatimSymLinks` to `cp` operation ([#880](https://github.com/zkrige/nw-builder/issues/880)) ([63d3b9e](https://github.com/zkrige/nw-builder/commit/63d3b9ed2fb7efa90d4dade3770e10a43e8fe3cd))
* **fs:** preserve relative symlinks of NW.js files ([#883](https://github.com/zkrige/nw-builder/issues/883)) ([48fc77e](https://github.com/zkrige/nw-builder/commit/48fc77e5d5725e0e4ea297260abd2f69487cc99c))
* get mode ([#827](https://github.com/zkrige/nw-builder/issues/827)) ([bf8a0fe](https://github.com/zkrige/nw-builder/commit/bf8a0fea70e77446463805f35bfcb6dac18441a2))
* **get/verify:** use crypto.timingSafeEqual to verify shasums ([3dd449a](https://github.com/zkrige/nw-builder/commit/3dd449aaa55a8f646027f7f454afbe0dc74db35b))
* **get:** `FFmpeg` decompression ([#962](https://github.com/zkrige/nw-builder/issues/962)) ([f05b386](https://github.com/zkrige/nw-builder/commit/f05b386e9c2cf7f2b39bdd9d3ca3cb842e89a494))
* **get:** cache ffmpeg ([#944](https://github.com/zkrige/nw-builder/issues/944)) ([51368bc](https://github.com/zkrige/nw-builder/commit/51368bc3f533acba0ddb1be99c972011d4c2b9a1))
* **get:** close file after reading all entries ([#1077](https://github.com/zkrige/nw-builder/issues/1077)) ([a6b090f](https://github.com/zkrige/nw-builder/commit/a6b090fd3ebeb4ed4d45d04c711d00eddf79dc9e))
* **get:** copy ffmpeg to correct location on windows ([#1044](https://github.com/zkrige/nw-builder/issues/1044)) ([71fa4ab](https://github.com/zkrige/nw-builder/commit/71fa4ab471c77b2853dd822e4ea5e97cbd9daeb9))
* **get:** correct ffmpeg path ([#1042](https://github.com/zkrige/nw-builder/issues/1042)) ([391a6e1](https://github.com/zkrige/nw-builder/commit/391a6e1a715407ba45ea4b12dda812caea709535))
* **get:** correctly pass options to function ([#953](https://github.com/zkrige/nw-builder/issues/953)) ([1ed0ac2](https://github.com/zkrige/nw-builder/commit/1ed0ac21f8d3e42a79ef5b5c5b397c5cfa2c3c5f))
* **get:** default import ([379e870](https://github.com/zkrige/nw-builder/commit/379e870e75a3598a0bc937f1c0c678392f0c6ba3))
* **get:** do not check integrity of community ffmpeg but give a warning ([#1253](https://github.com/zkrige/nw-builder/issues/1253)) ([0c05a34](https://github.com/zkrige/nw-builder/commit/0c05a3493c25a172c018e0d788a563c80592c2ef)), closes [#1209](https://github.com/zkrige/nw-builder/issues/1209)
* **get:** ffmpeg and symlinks ([d5c1bf5](https://github.com/zkrige/nw-builder/commit/d5c1bf53cc66afdf79c3f9653ff6b9e77a7de4b6))
* **get:** migrate from `unzipper` to `yauzl-promise` to prevent corrupting files ([#1015](https://github.com/zkrige/nw-builder/issues/1015)) ([673985e](https://github.com/zkrige/nw-builder/commit/673985e5e0b360bca44ff5ec8f1782ea947c0c9e)), closes [#1002](https://github.com/zkrige/nw-builder/issues/1002) [#1000](https://github.com/zkrige/nw-builder/issues/1000)
* **get:** missing import ([bd2273a](https://github.com/zkrige/nw-builder/commit/bd2273a84199de3b804e96c92da88e66aa7fce32))
* **get:** restore symlinks on unzip on `MacOS` ([#924](https://github.com/zkrige/nw-builder/issues/924)) ([7a3e356](https://github.com/zkrige/nw-builder/commit/7a3e3565e393e87fa0d6cfd62742220ab77939f4))
* **get:** return promise to await correctly ([#906](https://github.com/zkrige/nw-builder/issues/906)) ([275b4ab](https://github.com/zkrige/nw-builder/commit/275b4abc38e5f5d63385e2797515242c35b9b02a))
* **get:** use \s+ to split lines containing shasum info ([64f5709](https://github.com/zkrige/nw-builder/commit/64f5709f230199e3d6a6e837e95ec4e0f74dc806)), closes [#1317](https://github.com/zkrige/nw-builder/issues/1317)
* **get:** verify shasum for official ffmpeg not community ffmpeg ([#1251](https://github.com/zkrige/nw-builder/issues/1251)) ([9385836](https://github.com/zkrige/nw-builder/commit/938583602788f55f1e050013e78890118e19ed7a)), closes [#1209](https://github.com/zkrige/nw-builder/issues/1209)
* **get:** wrap `unzipper` in Promise ([#999](https://github.com/zkrige/nw-builder/issues/999)) ([735d228](https://github.com/zkrige/nw-builder/commit/735d228f1bdc196865aa9cb5d7ca822fc8936e8d))
* glob file and dir differently ([4e2d5af](https://github.com/zkrige/nw-builder/commit/4e2d5af29b18589faa19006b6b0670a6f4bd91ff))
* **glob:** do not resolve `options.srcDir` when parsing `options` object  ([#878](https://github.com/zkrige/nw-builder/issues/878)) ([0c8aceb](https://github.com/zkrige/nw-builder/commit/0c8aceb0360afb5bc6125415206c4d30d00cd3ab))
* macOS unzip ([#975](https://github.com/zkrige/nw-builder/issues/975)) ([c02566e](https://github.com/zkrige/nw-builder/commit/c02566e6da247309416c8a0ad1ac5ec05a0f6711))
* miscellaneous quality of life improvements ([#1296](https://github.com/zkrige/nw-builder/issues/1296)) ([a82c140](https://github.com/zkrige/nw-builder/commit/a82c140bd6ebd234dcfe5bb0bff668cfb18d60bc))
* missing symlinks in macos ([#990](https://github.com/zkrige/nw-builder/issues/990)) ([8ab84ea](https://github.com/zkrige/nw-builder/commit/8ab84eadd213bccecd41f9f8c53518b933a7b11c))
* module imports ([2b16a3c](https://github.com/zkrige/nw-builder/commit/2b16a3c2ebe77dbca5d8a42d3df041da36b5d788))
* move ffmpeg to correct folder after extract ([#917](https://github.com/zkrige/nw-builder/issues/917)) ([6e8cef6](https://github.com/zkrige/nw-builder/commit/6e8cef6610d6055b16efc9e23ac4114d335eee7a))
* order imports ([5038500](https://github.com/zkrige/nw-builder/commit/50385002c12e2230afcf87c7a1932eb7c3acc5b8))
* **osx:** set `NSHumanReadableCopyright` property ([#904](https://github.com/zkrige/nw-builder/issues/904)) ([03fda3f](https://github.com/zkrige/nw-builder/commit/03fda3fd0dc518412a7ef0a46d1dbe4e6376eb4d))
* prevent nuking `options.app`, use absolute path for `rcedit` ([#815](https://github.com/zkrige/nw-builder/issues/815)) ([ff8f4e7](https://github.com/zkrige/nw-builder/commit/ff8f4e70efe121b4975f3d09e056556c5bd2eb72))
* remove `outDir` directory if `options.zip` is true ([#889](https://github.com/zkrige/nw-builder/issues/889)) ([90afc6e](https://github.com/zkrige/nw-builder/commit/90afc6ead4675fa3ae39df98c8c360db2554d7a6))
* remove test impl for run mode ([f4d0173](https://github.com/zkrige/nw-builder/commit/f4d01738ef17f5c35f3a0336b72974ac2f23179d))
* rename executable using `options.app.name` ([295fa0d](https://github.com/zkrige/nw-builder/commit/295fa0d8a48b8b835d127f9a0b845dcb41b94193)), closes [#881](https://github.com/zkrige/nw-builder/issues/881)
* resolve file path after checking path type ([97055c4](https://github.com/zkrige/nw-builder/commit/97055c438147ffe8e6a36f644068119217dc30e2)), closes [#807](https://github.com/zkrige/nw-builder/issues/807)
* run mode options ([#718](https://github.com/zkrige/nw-builder/issues/718)) ([8af9bab](https://github.com/zkrige/nw-builder/commit/8af9babc43d898ff20910f003d6435667bfd2ed8))
* **run:** parse options.argv correctly ([#946](https://github.com/zkrige/nw-builder/issues/946)) ([60790fa](https://github.com/zkrige/nw-builder/commit/60790fab4c760acdd84b4327a98802e298532deb))
* **run:** return NW.js Node process during run mode from nwbuild function ([fa94df2](https://github.com/zkrige/nw-builder/commit/fa94df284c3e6d23e0efd44d363b71b564cf1f26))
* **run:** set stdio behaviour to inherit ([a3d181a](https://github.com/zkrige/nw-builder/commit/a3d181a5b9b6f967c11e7082fea57db96078bf7e))
* **security:** use execFileSync instead of execSync ([48193f0](https://github.com/zkrige/nw-builder/commit/48193f0e14cae4f02a8217df736d056204f446d9))
* set `files` to `options.srcDir`  if glob disabled ([#830](https://github.com/zkrige/nw-builder/issues/830)) ([56cf9b2](https://github.com/zkrige/nw-builder/commit/56cf9b2ea2df4d6b8272be6cba59ee17698b0b09))
* **test:** disable glob in chromedriver tests ([#907](https://github.com/zkrige/nw-builder/issues/907)) ([4ded67d](https://github.com/zkrige/nw-builder/commit/4ded67daba31021ab637d209cc455de2413402ee))
* **test:** false positives while building and running demo app ([#781](https://github.com/zkrige/nw-builder/issues/781)) ([8c6af3d](https://github.com/zkrige/nw-builder/commit/8c6af3d13ce100d28fe86905cb35c2e8abc37fea))
* **types:** add managedManifest parameter in options ([#1249](https://github.com/zkrige/nw-builder/issues/1249)) ([8b3b407](https://github.com/zkrige/nw-builder/commit/8b3b407ab96e8f4162abf92b6e8158923f71687f)), closes [#1248](https://github.com/zkrige/nw-builder/issues/1248)
* **types:** align type definitions with docs ([#956](https://github.com/zkrige/nw-builder/issues/956)) ([3b3ac27](https://github.com/zkrige/nw-builder/commit/3b3ac2743e9f47df02fb5f69cbacb30819839c96))
* **types:** correct nwbuild function return type ([b274d27](https://github.com/zkrige/nw-builder/commit/b274d27dbb843b76e26be751249b994f233ac696))
* typo ([#773](https://github.com/zkrige/nw-builder/issues/773)) ([25fc923](https://github.com/zkrige/nw-builder/commit/25fc923549c7b9fdcd9f2cc95f68908f2bfe84d8))
* **util:** correct Array.isArray usage ([31c4132](https://github.com/zkrige/nw-builder/commit/31c4132bc3313c687f85e7b9ecf2562c483b6639))
* **util:** specify default values in CLI invocation ([3b3799d](https://github.com/zkrige/nw-builder/commit/3b3799d6923c3b2a2c361f26978f35dd35d089ac))
* **util:** strip special and control characters from app.name ([#1259](https://github.com/zkrige/nw-builder/issues/1259)) ([b035bc3](https://github.com/zkrige/nw-builder/commit/b035bc3d7393b7ae15c3996e62eb24afbf691945))
* **util:** use strict boolean check for glob flag ([63c931d](https://github.com/zkrige/nw-builder/commit/63c931dad34c2b5449c74b540924a91d8ed51685))
* **util:** validate options.* correctly ([#1298](https://github.com/zkrige/nw-builder/issues/1298)) ([3034f5c](https://github.com/zkrige/nw-builder/commit/3034f5cd4214f9b1e4ee5d459a20463eb4d0a50d))
* **util:** validate options.app.* values ([#1302](https://github.com/zkrige/nw-builder/issues/1302)) ([4f388a9](https://github.com/zkrige/nw-builder/commit/4f388a95b3ad634330290ddbc9afca9ab1cda576)), closes [#1279](https://github.com/zkrige/nw-builder/issues/1279) [#1293](https://github.com/zkrige/nw-builder/issues/1293)
* **util:** validate options.app.company iff defined ([a273e23](https://github.com/zkrige/nw-builder/commit/a273e2335c29922e662b7cc69aeeb0ffe40fba33))
* **util:** validate windows options.app.* iff defined ([8a65a6d](https://github.com/zkrige/nw-builder/commit/8a65a6dfc6e3bb16431b81b751140ec7a4056496))
* validate version ([#835](https://github.com/zkrige/nw-builder/issues/835)) ([68d3593](https://github.com/zkrige/nw-builder/commit/68d35934a7a4fef0c5156c82ec6b9071a8a39bc3))
* **win-bld:** skip modify exe if platform is not windows or wine is not installed ([#739](https://github.com/zkrige/nw-builder/issues/739)) ([cb5f0f9](https://github.com/zkrige/nw-builder/commit/cb5f0f9378d419debe162c2df2589ea84dc34d3a))
* **win:** enable icon ([#905](https://github.com/zkrige/nw-builder/issues/905)) ([547e90c](https://github.com/zkrige/nw-builder/commit/547e90cae52e2d1f8e0828e9ae2e1d5bc650cb0b))
* **yargs:** specify arguments types ([#901](https://github.com/zkrige/nw-builder/issues/901)) ([daff3f8](https://github.com/zkrige/nw-builder/commit/daff3f8a3e0843fd45742af9c248b0eec5e05be0))


### Chores

* add `CODEOWNERS` ([2550300](https://github.com/zkrige/nw-builder/commit/2550300e8fe76c5e5ff4745a8b063c52501ddb5a))
* add github sponsor button ([0e8fc10](https://github.com/zkrige/nw-builder/commit/0e8fc1097a3c4bedc61adfe4918be845426d7a84))
* add type definition file ([7c2354f](https://github.com/zkrige/nw-builder/commit/7c2354f9885c5fffc363b2cd32e457264ac45dbe)), closes [#838](https://github.com/zkrige/nw-builder/issues/838)
* **bld:** migrate from rcedit with resedit ([#1094](https://github.com/zkrige/nw-builder/issues/1094)) ([03a55b9](https://github.com/zkrige/nw-builder/commit/03a55b919a7e5dfcc1d9fa3f06baa327804d67c4))
* **bld:** remove repetitive code for updating MacOS Helper apps ([#1214](https://github.com/zkrige/nw-builder/issues/1214)) ([e1edc05](https://github.com/zkrige/nw-builder/commit/e1edc051c1660ef474643b903ac4e9a0f2968a05))
* **ci:** add chores section to changelog ([#1028](https://github.com/zkrige/nw-builder/issues/1028)) ([d630720](https://github.com/zkrige/nw-builder/commit/d630720039ba81563aa0e00995aa004c8d5edc79))
* **ci:** add concurrency ([41494f5](https://github.com/zkrige/nw-builder/commit/41494f535a583ba2a69daa651b8d1582726a4ad7))
* **ci:** add Google's Release Please Action ([69b6b6a](https://github.com/zkrige/nw-builder/commit/69b6b6aa8e61f0c170abbf57b881d2023effda8b))
* **ci:** add Vitest Coverage Action ([#1136](https://github.com/zkrige/nw-builder/issues/1136)) ([4d32845](https://github.com/zkrige/nw-builder/commit/4d32845877ee7a64b61e8226b5593f6c8137524a)), closes [#1041](https://github.com/zkrige/nw-builder/issues/1041)
* **cicd:** build cjs, remove volta, add e2e tests ([#738](https://github.com/zkrige/nw-builder/issues/738)) ([3362547](https://github.com/zkrige/nw-builder/commit/3362547783bebf22464e6d06f59613522acdcc49))
* **ci:** check for NPM_TOKEN in separate job ([74ca486](https://github.com/zkrige/nw-builder/commit/74ca486a8f8660636e5d17fec9c5ce40e36f9cae))
* **ci:** check for valid licenses ([#1150](https://github.com/zkrige/nw-builder/issues/1150)) ([ab99731](https://github.com/zkrige/nw-builder/commit/ab997311046b1e75aee24397a3b9bb20d19c4d2f))
* **ci:** check if NPM_TOKEN exists as action step ([6b7e64e](https://github.com/zkrige/nw-builder/commit/6b7e64ed100789c314f97cc786ad59fbdff5bca1))
* **ci:** correct config hopefully ([0bad4d2](https://github.com/zkrige/nw-builder/commit/0bad4d2893389a76f7292bfaffaa77cdb8094571))
* **ci:** do not run npm publish job if NPM_TOKEN is not available ([e21051c](https://github.com/zkrige/nw-builder/commit/e21051cc8098f12d1006e184108755a88f435517))
* **ci:** enable continue-on-error for env job ([b6ee211](https://github.com/zkrige/nw-builder/commit/b6ee211518943ce60bdeda85eae3fab0e43b6d20))
* **ci:** fail if NPM_TOKEN not set ([84484a1](https://github.com/zkrige/nw-builder/commit/84484a1fcd9e307d6225a4b453f778e3f44fd542))
* **ci:** fixup release please action ([#1032](https://github.com/zkrige/nw-builder/issues/1032)) ([f9ae7cd](https://github.com/zkrige/nw-builder/commit/f9ae7cd170bba17849ff66ac4612df9d3a0716de))
* **ci:** move NPM_TOKEN conditional inside action steps ([ea6ea4c](https://github.com/zkrige/nw-builder/commit/ea6ea4c0d63184822a69ec2627a361892a6121d7))
* **ci:** remove `schema` prop ([33238b1](https://github.com/zkrige/nw-builder/commit/33238b14fb1bff16bd351826bd2d891c7e6d136c))
* **ci:** set continue-on-error to false ([3b9a8a2](https://github.com/zkrige/nw-builder/commit/3b9a8a29030a27fbc4792b367e2c91158b3e60b3))
* **cli:** migrate from yargs to commander ([#1216](https://github.com/zkrige/nw-builder/issues/1216)) ([7ca5a28](https://github.com/zkrige/nw-builder/commit/7ca5a28f40078ab179aab72cf0f3260ef5f118f2))
* **decompress:** factor out decompression techniques ([#1019](https://github.com/zkrige/nw-builder/issues/1019)) ([d04d5a0](https://github.com/zkrige/nw-builder/commit/d04d5a00f54742f7c207d9f37682a7cb38f247c8))
* **deps-dev:** bump @stylistic/eslint-plugin-js from 2.1.0 to 2.2.1 in the npm group ([#1123](https://github.com/zkrige/nw-builder/issues/1123)) ([fcd83a9](https://github.com/zkrige/nw-builder/commit/fcd83a9875068ed9e86870cb4bbdabcb86b74bef))
* **deps-dev:** bump concurrently from 8.2.0 to 8.2.1 ([#929](https://github.com/zkrige/nw-builder/issues/929)) ([dcf2d7c](https://github.com/zkrige/nw-builder/commit/dcf2d7c748187f1138fe3a439a5e3e7880ea58f2))
* **deps-dev:** bump esbuild from 0.15.16 to 0.16.3 ([#726](https://github.com/zkrige/nw-builder/issues/726)) ([a5f3493](https://github.com/zkrige/nw-builder/commit/a5f34931815fcdfca5a4b252de694b1539610074))
* **deps-dev:** bump esbuild from 0.15.18 to 0.16.12 ([#748](https://github.com/zkrige/nw-builder/issues/748)) ([9f8e042](https://github.com/zkrige/nw-builder/commit/9f8e0429165b48236c2758f279616c66fa8ffc27))
* **deps-dev:** bump esbuild from 0.16.10 to 0.16.11 ([#741](https://github.com/zkrige/nw-builder/issues/741)) ([c14784f](https://github.com/zkrige/nw-builder/commit/c14784f6ec14a5aba4729edc961f4616a2eca2a0))
* **deps-dev:** bump esbuild from 0.16.11 to 0.16.12 ([#744](https://github.com/zkrige/nw-builder/issues/744)) ([0d77464](https://github.com/zkrige/nw-builder/commit/0d77464cbed500d80906ccb2fe057caa61880396))
* **deps-dev:** bump esbuild from 0.16.3 to 0.16.4 ([#728](https://github.com/zkrige/nw-builder/issues/728)) ([8c4f7d5](https://github.com/zkrige/nw-builder/commit/8c4f7d5965599897fafd483ae4dc7058723e0f4c))
* **deps-dev:** bump esbuild from 0.16.4 to 0.16.5 ([#730](https://github.com/zkrige/nw-builder/issues/730)) ([3b77a6f](https://github.com/zkrige/nw-builder/commit/3b77a6f277c6177755fbc64d6c0de293b723202f))
* **deps-dev:** bump esbuild from 0.16.5 to 0.16.6 ([#731](https://github.com/zkrige/nw-builder/issues/731)) ([bbe3180](https://github.com/zkrige/nw-builder/commit/bbe3180efb0022e4cfe2312cfb92d384a50fea8d))
* **deps-dev:** bump esbuild from 0.16.6 to 0.16.7 ([#732](https://github.com/zkrige/nw-builder/issues/732)) ([4ac335c](https://github.com/zkrige/nw-builder/commit/4ac335cd8d4fc63a935886801af6ec661240f8f1))
* **deps-dev:** bump esbuild from 0.16.7 to 0.16.9 ([#734](https://github.com/zkrige/nw-builder/issues/734)) ([3a5373f](https://github.com/zkrige/nw-builder/commit/3a5373fb35174a84bcbba7869811af0b70926777))
* **deps-dev:** bump esbuild from 0.16.9 to 0.16.10 ([#735](https://github.com/zkrige/nw-builder/issues/735)) ([31a55bd](https://github.com/zkrige/nw-builder/commit/31a55bd2beb7c97652baaf8d40ac080bac65478a))
* **deps-dev:** bump eslint from 8.28.0 to 8.29.0 ([#725](https://github.com/zkrige/nw-builder/issues/725)) ([0094a32](https://github.com/zkrige/nw-builder/commit/0094a32bd77770e943fa2c76b3ef5017ad7932af))
* **deps-dev:** bump eslint from 8.29.0 to 8.30.0 ([#733](https://github.com/zkrige/nw-builder/issues/733)) ([b4eb86c](https://github.com/zkrige/nw-builder/commit/b4eb86c6ffafa78607c9325f4fdbcc9ddc7e7800))
* **deps-dev:** bump eslint from 8.30.0 to 8.31.0 ([#750](https://github.com/zkrige/nw-builder/issues/750)) ([158d4be](https://github.com/zkrige/nw-builder/commit/158d4bed71476e9d04efc5771c13d41bbfe8ec91))
* **deps-dev:** bump eslint from 8.31.0 to 8.33.0 ([#780](https://github.com/zkrige/nw-builder/issues/780)) ([a21e844](https://github.com/zkrige/nw-builder/commit/a21e844278ddf7e2613b183ce1599162ffa4512f))
* **deps-dev:** bump eslint from 8.34.0 to 8.35.0 ([#805](https://github.com/zkrige/nw-builder/issues/805)) ([62337f3](https://github.com/zkrige/nw-builder/commit/62337f32e8bc38899b6b64f0be37f8a6b7df240c))
* **deps-dev:** bump eslint from 8.36.0 to 8.37.0 ([#834](https://github.com/zkrige/nw-builder/issues/834)) ([8e2e550](https://github.com/zkrige/nw-builder/commit/8e2e550cf170ed6bf5cb7dfee0949cba55d0f325))
* **deps-dev:** bump eslint from 8.38.0 to 8.39.0 ([#849](https://github.com/zkrige/nw-builder/issues/849)) ([920e8ff](https://github.com/zkrige/nw-builder/commit/920e8ff7d3268effb028c1fa2368a790d7418d5a))
* **deps-dev:** bump eslint from 8.39.0 to 8.40.0 ([#862](https://github.com/zkrige/nw-builder/issues/862)) ([876c785](https://github.com/zkrige/nw-builder/commit/876c785ac445421b0debac344e4a7504c043d6c2))
* **deps-dev:** bump eslint from 8.45.0 to 8.47.0 ([#920](https://github.com/zkrige/nw-builder/issues/920)) ([1bfa364](https://github.com/zkrige/nw-builder/commit/1bfa364b97a02862fc9d19c0e920ede57effa806))
* **deps-dev:** bump eslint-plugin-jsdoc from 48.2.13 to 48.4.0 in the npm group ([#1138](https://github.com/zkrige/nw-builder/issues/1138)) ([61189de](https://github.com/zkrige/nw-builder/commit/61189de946bf5bafd2acdd7b37b05e5a68e6b9a3))
* **deps-dev:** bump gh-pages from 5.0.0 to 6.0.0 ([#919](https://github.com/zkrige/nw-builder/issues/919)) ([1552e65](https://github.com/zkrige/nw-builder/commit/1552e653d670102aa038ca80451ff0dd9e643a8e))
* **deps-dev:** bump jest from 29.3.1 to 29.4.1 ([#779](https://github.com/zkrige/nw-builder/issues/779)) ([ef37e56](https://github.com/zkrige/nw-builder/commit/ef37e568351a0a195f848c73e70581a3d5b4fb10))
* **deps-dev:** bump jest from 29.4.3 to 29.5.0 ([#809](https://github.com/zkrige/nw-builder/issues/809)) ([4fde06f](https://github.com/zkrige/nw-builder/commit/4fde06f00b1bbcb63d758a29d62006b691b8617f))
* **deps-dev:** bump jest-environment-jsdom from 29.4.3 to 29.5.0 ([#810](https://github.com/zkrige/nw-builder/issues/810)) ([cbe380f](https://github.com/zkrige/nw-builder/commit/cbe380f74ee8ac43a00fd6e0194c2736c79065f0))
* **deps-dev:** bump jsdom from 20.0.3 to 21.0.0 ([#761](https://github.com/zkrige/nw-builder/issues/761)) ([478380f](https://github.com/zkrige/nw-builder/commit/478380fb67fcc9f2d21b83c758d435669c866e51))
* **deps-dev:** bump jsdom from 21.0.0 to 21.1.0 ([#777](https://github.com/zkrige/nw-builder/issues/777)) ([bade9aa](https://github.com/zkrige/nw-builder/commit/bade9aadf9060fd4233913cbce660f0d23f77c21))
* **deps-dev:** bump jsdom from 21.1.1 to 22.0.0 ([#857](https://github.com/zkrige/nw-builder/issues/857)) ([bb5be3a](https://github.com/zkrige/nw-builder/commit/bb5be3abf4822f97735d699a5dd7748d2644ce01))
* **deps-dev:** bump jsdom from 22.0.0 to 22.1.0 ([79025a6](https://github.com/zkrige/nw-builder/commit/79025a64a8b7c932bcb4082f6ca801a7aa2f0088))
* **deps-dev:** bump nw from 0.92.0 to 0.93.0 in the npm group across 1 directory ([#1289](https://github.com/zkrige/nw-builder/issues/1289)) ([ed275ad](https://github.com/zkrige/nw-builder/commit/ed275ad120105d8b5d8f324e97b311c791a92d1a))
* **deps-dev:** bump postcss from 8.4.30 to 8.4.31 ([#958](https://github.com/zkrige/nw-builder/issues/958)) ([78903c4](https://github.com/zkrige/nw-builder/commit/78903c412bb64fcf750576d0f572a6873c842227))
* **deps-dev:** bump prettier from 2.8.0 to 2.8.1 ([#724](https://github.com/zkrige/nw-builder/issues/724)) ([749cab9](https://github.com/zkrige/nw-builder/commit/749cab991f105c0489423330c2980d1b7365d1de))
* **deps-dev:** bump prettier from 2.8.1 to 2.8.2 ([#762](https://github.com/zkrige/nw-builder/issues/762)) ([0ff4a2a](https://github.com/zkrige/nw-builder/commit/0ff4a2af979c8b0485045803b1c9fb4f978a54f6))
* **deps-dev:** bump prettier from 2.8.2 to 2.8.3 ([#775](https://github.com/zkrige/nw-builder/issues/775)) ([a1f04e6](https://github.com/zkrige/nw-builder/commit/a1f04e6a8bc49b711a3232d46613965f2b01f594))
* **deps-dev:** bump prettier from 2.8.7 to 2.8.8 ([#851](https://github.com/zkrige/nw-builder/issues/851)) ([20e72dc](https://github.com/zkrige/nw-builder/commit/20e72dcdb2577bb2eee77fe7ac8d890c8586581b))
* **deps-dev:** bump prettier from 3.0.1 to 3.0.2 ([#925](https://github.com/zkrige/nw-builder/issues/925)) ([64823c9](https://github.com/zkrige/nw-builder/commit/64823c9431096cb254dacfae25c0a303d2b29e0f))
* **deps-dev:** bump prettier from 3.0.2 to 3.0.3 ([#941](https://github.com/zkrige/nw-builder/issues/941)) ([75ad1fa](https://github.com/zkrige/nw-builder/commit/75ad1fafb988628b2262d467b1133bb2de1080e3))
* **deps-dev:** bump selenium-webdriver from 4.10.0 to 4.11.1 ([#913](https://github.com/zkrige/nw-builder/issues/913)) ([e22a615](https://github.com/zkrige/nw-builder/commit/e22a615d01ed2e7bb6b98da104ef9c2070098d00))
* **deps-dev:** bump selenium-webdriver from 4.8.1 to 4.8.2 ([#828](https://github.com/zkrige/nw-builder/issues/828)) ([d6a3c27](https://github.com/zkrige/nw-builder/commit/d6a3c2751f98f44bcd94be6ea2202f81199ed875))
* **deps-dev:** bump selenium-webdriver from 4.8.2 to 4.9.0 ([#848](https://github.com/zkrige/nw-builder/issues/848)) ([0c11e40](https://github.com/zkrige/nw-builder/commit/0c11e40c518f1ca369b5d8f7d71e403af7e38383))
* **deps-dev:** bump selenium-webdriver from 4.9.0 to 4.9.2 ([#860](https://github.com/zkrige/nw-builder/issues/860)) ([1da98e5](https://github.com/zkrige/nw-builder/commit/1da98e5ebc2f7b74e5b33abe337d9353045c073a))
* **deps-dev:** bump the npm group across 1 directory with 4 updates ([#1142](https://github.com/zkrige/nw-builder/issues/1142)) ([761963d](https://github.com/zkrige/nw-builder/commit/761963d60db32aa53fd585204ea83868164986ae))
* **deps-dev:** bump the npm group across 1 directory with 6 updates ([#1250](https://github.com/zkrige/nw-builder/issues/1250)) ([94da963](https://github.com/zkrige/nw-builder/commit/94da963848ef2f311d13da49a1d78e6b8f117b22))
* **deps-dev:** bump the npm group across 1 directory with 6 updates ([#1301](https://github.com/zkrige/nw-builder/issues/1301)) ([56c1192](https://github.com/zkrige/nw-builder/commit/56c11929d1ae0bce83f4f12ba6fd315d70fd43f3))
* **deps-dev:** bump the npm group with 1 update ([#1007](https://github.com/zkrige/nw-builder/issues/1007)) ([32b650f](https://github.com/zkrige/nw-builder/commit/32b650f91ed670aca70f2bc42b62122316947c0c))
* **deps-dev:** bump the npm group with 1 update ([#943](https://github.com/zkrige/nw-builder/issues/943)) ([1a03b63](https://github.com/zkrige/nw-builder/commit/1a03b6387b59e3069870ec417c36e1b9a686b3a6))
* **deps-dev:** bump the npm group with 1 update ([#947](https://github.com/zkrige/nw-builder/issues/947)) ([1aaf8c6](https://github.com/zkrige/nw-builder/commit/1aaf8c6d38377b3ff85455424fd52face0d3f5fa))
* **deps-dev:** bump the npm group with 1 update ([#948](https://github.com/zkrige/nw-builder/issues/948)) ([42b506f](https://github.com/zkrige/nw-builder/commit/42b506fba2034fb4bbec501bb90ad33bd38ee181))
* **deps-dev:** bump the npm group with 1 update ([#959](https://github.com/zkrige/nw-builder/issues/959)) ([613560f](https://github.com/zkrige/nw-builder/commit/613560f2e32fde3bd9c5ca7a86825232fbf2c66f))
* **deps-dev:** bump the npm group with 1 update ([#969](https://github.com/zkrige/nw-builder/issues/969)) ([bdd7d53](https://github.com/zkrige/nw-builder/commit/bdd7d531bfb6eefecd1b23b5980aea89b3858fdc))
* **deps-dev:** bump the npm group with 1 update ([#991](https://github.com/zkrige/nw-builder/issues/991)) ([2078b29](https://github.com/zkrige/nw-builder/commit/2078b2985df3dd579353459447c7d5cfac1cf5f7))
* **deps-dev:** bump the npm group with 2 updates ([#982](https://github.com/zkrige/nw-builder/issues/982)) ([c8bc28d](https://github.com/zkrige/nw-builder/commit/c8bc28d775b8002765e997a3d9dbf4454076bce1))
* **deps-dev:** bump the npm group with 2 updates ([#984](https://github.com/zkrige/nw-builder/issues/984)) ([fd45405](https://github.com/zkrige/nw-builder/commit/fd45405787407ac3384e9aa1282c0f67fa09fb2d))
* **deps-dev:** bump vitepress from 1.0.0-alpha.61 to 1.0.0-alpha.64 ([#833](https://github.com/zkrige/nw-builder/issues/833)) ([b76edbb](https://github.com/zkrige/nw-builder/commit/b76edbbda5c5a1128d6ba0507c94f15635f0ef20))
* **deps-dev:** bump vitepress from 1.0.0-alpha.65 to 1.0.0-alpha.74 ([#850](https://github.com/zkrige/nw-builder/issues/850)) ([45ee351](https://github.com/zkrige/nw-builder/commit/45ee351526cc047257f27d9193d701ba70d6618d))
* **deps-dev:** bump vitepress from 1.0.0-alpha.74 to 1.0.0-alpha.75 ([#854](https://github.com/zkrige/nw-builder/issues/854)) ([ddaaa69](https://github.com/zkrige/nw-builder/commit/ddaaa69c032fbd828418f82a140db4cfe6823a75))
* **deps-dev:** bump vitepress from 1.0.0-beta.6 to 1.0.0-rc.4 ([#911](https://github.com/zkrige/nw-builder/issues/911)) ([d692421](https://github.com/zkrige/nw-builder/commit/d6924219035a4061fb39585f846f60e5f4b0273b))
* **deps-dev:** bump ws from 8.17.0 to 8.17.1 ([#1126](https://github.com/zkrige/nw-builder/issues/1126)) ([7aa6f08](https://github.com/zkrige/nw-builder/commit/7aa6f08927869c8ceb5da686bb53e48f537f7a40))
* **deps:** bump @babel/runtime from 7.26.0 to 7.26.10 in the npm_and_yarn group ([#1373](https://github.com/zkrige/nw-builder/issues/1373)) ([0b2d34e](https://github.com/zkrige/nw-builder/commit/0b2d34e11d9bf939a9e608bb6ca6415a929457e0))
* **deps:** bump actions/checkout from 4.1.5 to 4.1.6 in /.github/workflows in the gha group ([#1095](https://github.com/zkrige/nw-builder/issues/1095)) ([0f1b126](https://github.com/zkrige/nw-builder/commit/0f1b1260d3a36939c111313ec1ab121fe8f12955))
* **deps:** bump actions/checkout from 4.1.6 to 4.1.7 in /.github/workflows in the gha group ([#1116](https://github.com/zkrige/nw-builder/issues/1116)) ([eefde68](https://github.com/zkrige/nw-builder/commit/eefde686e344ae3e51191caf66a5b6b0b1b736fe))
* **deps:** bump actions/checkout from 4.2.0 to 4.2.1 in /.github/workflows in the gha group ([#1273](https://github.com/zkrige/nw-builder/issues/1273)) ([3165f2b](https://github.com/zkrige/nw-builder/commit/3165f2b0a6da286295ddc94b4178b7567d394043))
* **deps:** bump actions/setup-node from 4.0.2 to 4.0.3 in /.github/workflows in the gha group ([#1151](https://github.com/zkrige/nw-builder/issues/1151)) ([7130930](https://github.com/zkrige/nw-builder/commit/7130930c3d7ce28c1e07c510045576830e266c77))
* **deps:** bump actions/setup-node from 4.0.3 to 4.0.4 in /.github/workflows in the gha group ([#1232](https://github.com/zkrige/nw-builder/issues/1232)) ([8473fc6](https://github.com/zkrige/nw-builder/commit/8473fc63811fd08066b7801c019d00565918770b))
* **deps:** bump actions/setup-node from 4.2.0 to 4.3.0 in /.github/workflows in the gha group ([#1370](https://github.com/zkrige/nw-builder/issues/1370)) ([5509ca9](https://github.com/zkrige/nw-builder/commit/5509ca93acd5fa68f9e860f1ff3c30d96ea739b1))
* **deps:** bump compressing from 1.9.0 to 1.9.1 ([#914](https://github.com/zkrige/nw-builder/issues/914)) ([39ea475](https://github.com/zkrige/nw-builder/commit/39ea475552b907282acf6fcc9558cf774a8956fc))
* **deps:** bump cross-spawn from 7.0.3 to 7.0.6 ([#1305](https://github.com/zkrige/nw-builder/issues/1305)) ([2803af3](https://github.com/zkrige/nw-builder/commit/2803af3d46ff49bb87487ce3ce59de764ee57cbd))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.4.0 to 2.5.0 in /.github/workflows in the gha group ([#1140](https://github.com/zkrige/nw-builder/issues/1140)) ([fddaf9f](https://github.com/zkrige/nw-builder/commit/fddaf9f1a2f53b8c9b8314b4043d5a0523be2e35))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.5.0 to 2.5.1 in /.github/workflows in the gha group ([#1210](https://github.com/zkrige/nw-builder/issues/1210)) ([6d69ae3](https://github.com/zkrige/nw-builder/commit/6d69ae36bc1edcf1867aa25e464e4a9b1aa28aa4))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.6.0 to 2.7.0 in /.github/workflows in the gha group ([#1295](https://github.com/zkrige/nw-builder/issues/1295)) ([23aaad8](https://github.com/zkrige/nw-builder/commit/23aaad85322ac5eb2a3ccb8546a43884c4d89b04))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.7.0 to 2.8.0 in /.github/workflows in the gha group ([#1303](https://github.com/zkrige/nw-builder/issues/1303)) ([ceaf348](https://github.com/zkrige/nw-builder/commit/ceaf348f2d62243576f0c8b6ff57aab1ea1848dc))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.8.1 to 2.8.2 in /.github/workflows in the gha group ([#1388](https://github.com/zkrige/nw-builder/issues/1388)) ([7a51dd4](https://github.com/zkrige/nw-builder/commit/7a51dd4fac0c70b8c23f2a345eb130e9e007dc97))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.8.2 to 2.8.3 in /.github/workflows in the gha group ([#1398](https://github.com/zkrige/nw-builder/issues/1398)) ([548d0e5](https://github.com/zkrige/nw-builder/commit/548d0e5d09e091ba9eaceaa957dbd49a01becdad))
* **deps:** bump follow-redirects from 1.15.5 to 1.15.6 ([#1052](https://github.com/zkrige/nw-builder/issues/1052)) ([8258de9](https://github.com/zkrige/nw-builder/commit/8258de9773fe5b9e497abbb9cea6978329ee6707))
* **deps:** bump glob from 10.0.0 to 10.2.4 ([#861](https://github.com/zkrige/nw-builder/issues/861)) ([c3e9ee6](https://github.com/zkrige/nw-builder/commit/c3e9ee65f32304a5349110b2929d4a8232a2c8bb))
* **deps:** bump glob from 10.2.4 to 10.2.6 ([#865](https://github.com/zkrige/nw-builder/issues/865)) ([6485797](https://github.com/zkrige/nw-builder/commit/6485797a2561134ace18d32e0a94cc8e4aaada4f))
* **deps:** bump glob from 9.3.4 to 10.0.0 ([#841](https://github.com/zkrige/nw-builder/issues/841)) ([9285f4d](https://github.com/zkrige/nw-builder/commit/9285f4d5a713edc2a6efbc4190456c9c4d6884be))
* **deps:** bump glob-promise from 6.0.1 to 6.0.2 ([#776](https://github.com/zkrige/nw-builder/issues/776)) ([e563ddb](https://github.com/zkrige/nw-builder/commit/e563ddb12fca0a090315d1266cf95bd9eb4079eb))
* **deps:** bump google-github-actions/release-please-action from 4.1.0 to 4.1.1 in /.github/workflows in the gha group ([#1091](https://github.com/zkrige/nw-builder/issues/1091)) ([316741b](https://github.com/zkrige/nw-builder/commit/316741ba699fcd0f8a7dd1176cbd14ca05c571be))
* **deps:** bump googleapis/release-please-action from 4.1.1 to 4.1.3 in /.github/workflows in the gha group ([#1114](https://github.com/zkrige/nw-builder/issues/1114)) ([e284f5b](https://github.com/zkrige/nw-builder/commit/e284f5b61c0df05b63388ea5d31311f5daacd858))
* **deps:** bump googleapis/release-please-action from 4.1.4 to 4.2.0 in /.github/workflows in the gha group across 1 directory ([#1364](https://github.com/zkrige/nw-builder/issues/1364)) ([0f28592](https://github.com/zkrige/nw-builder/commit/0f28592f543b62af07b9b4f8aa291712e4e45432))
* **deps:** bump http-cache-semantics from 4.1.0 to 4.1.1 ([#782](https://github.com/zkrige/nw-builder/issues/782)) ([200d8c2](https://github.com/zkrige/nw-builder/commit/200d8c26e081a98aed0342e2fce9aa96b118a48a))
* **deps:** bump ip from 2.0.0 to 2.0.1 ([2284d52](https://github.com/zkrige/nw-builder/commit/2284d52ba0c4d1bb9a86a91e138ba99ce2af8d6c))
* **deps:** bump json5 from 2.2.1 to 2.2.2 ([#745](https://github.com/zkrige/nw-builder/issues/745)) ([547d402](https://github.com/zkrige/nw-builder/commit/547d4027e56748563ab2dec8b8476abb91842c62))
* **deps:** bump rcedit from 3.0.1 to 3.1.0 ([#915](https://github.com/zkrige/nw-builder/issues/915)) ([320192a](https://github.com/zkrige/nw-builder/commit/320192a08ffc7013403d9ea27b0bbde162ab4053))
* **deps:** bump rollup from 4.22.1 to 4.22.4 ([#1241](https://github.com/zkrige/nw-builder/issues/1241)) ([6601ebc](https://github.com/zkrige/nw-builder/commit/6601ebc3db46e28964e0aa05de37a2f68745ba46))
* **deps:** bump tar from 6.1.12 to 6.1.13 ([#723](https://github.com/zkrige/nw-builder/issues/723)) ([49f6a3b](https://github.com/zkrige/nw-builder/commit/49f6a3b317502c961df9623edc112ec540a651bb))
* **deps:** bump the gha group across 1 directory with 2 updates ([#1247](https://github.com/zkrige/nw-builder/issues/1247)) ([526454e](https://github.com/zkrige/nw-builder/commit/526454e276c67bac435c02699109ae563fe1c4d7))
* **deps:** bump the gha group across 1 directory with 2 updates ([#1285](https://github.com/zkrige/nw-builder/issues/1285)) ([13081c9](https://github.com/zkrige/nw-builder/commit/13081c918ce2b76cf39a31b8b25ef26e3903f91c))
* **deps:** bump the gha group across 1 directory with 2 updates ([#1358](https://github.com/zkrige/nw-builder/issues/1358)) ([48e4947](https://github.com/zkrige/nw-builder/commit/48e49474c5aa0c13add585489ae74b6d9adef541))
* **deps:** bump the gha group across 1 directory with 2 updates ([#1385](https://github.com/zkrige/nw-builder/issues/1385)) ([2a98e27](https://github.com/zkrige/nw-builder/commit/2a98e27868d149323fa2ef39dd1eeaaad77e464f))
* **deps:** bump the gha group in /.github/workflows with 1 update ([70030df](https://github.com/zkrige/nw-builder/commit/70030df94d55e5563775df16b7f07b2537198f69))
* **deps:** bump the gha group in /.github/workflows with 1 update ([40fac90](https://github.com/zkrige/nw-builder/commit/40fac907ed7ed2383f5566a21eeaf141fdf0cb47))
* **deps:** bump the gha group in /.github/workflows with 1 update ([#1054](https://github.com/zkrige/nw-builder/issues/1054)) ([1935800](https://github.com/zkrige/nw-builder/commit/1935800ce560ad5c59cf422276916e3960a60a0d))
* **deps:** bump the gha group in /.github/workflows with 2 updates ([#1051](https://github.com/zkrige/nw-builder/issues/1051)) ([0362403](https://github.com/zkrige/nw-builder/commit/0362403b9501465258b974caefe623eebfb640f1))
* **deps:** bump the gha group in /.github/workflows with 2 updates ([#1074](https://github.com/zkrige/nw-builder/issues/1074)) ([fd8a633](https://github.com/zkrige/nw-builder/commit/fd8a6335a26a01f187171e607f289485b0d4865f))
* **deps:** bump the gha group in /.github/workflows with 2 updates ([#954](https://github.com/zkrige/nw-builder/issues/954)) ([ef4e9a6](https://github.com/zkrige/nw-builder/commit/ef4e9a6a4fb77c8632bae4f90350e045648e51e8))
* **deps:** bump the gha group in /.github/workflows with 2 updates ([#968](https://github.com/zkrige/nw-builder/issues/968)) ([2e0b932](https://github.com/zkrige/nw-builder/commit/2e0b93233edd3bcc9d10d9ca56201d9dd02c9064))
* **deps:** bump the gha group in /.github/workflows with 2 updates ([#972](https://github.com/zkrige/nw-builder/issues/972)) ([e1a57c5](https://github.com/zkrige/nw-builder/commit/e1a57c5b0772572e449cf0fc5a15be782e2410ab))
* **deps:** bump the npm group across 1 directory with 11 updates ([#1078](https://github.com/zkrige/nw-builder/issues/1078)) ([7158c7b](https://github.com/zkrige/nw-builder/commit/7158c7b8881d333995d1cda32812776500d7d96b))
* **deps:** bump the npm group across 1 directory with 11 updates ([#1332](https://github.com/zkrige/nw-builder/issues/1332)) ([b9b96ff](https://github.com/zkrige/nw-builder/commit/b9b96ff565921a518893770996568bb30cee179b))
* **deps:** bump the npm group across 1 directory with 13 updates ([#1357](https://github.com/zkrige/nw-builder/issues/1357)) ([9d3fe0c](https://github.com/zkrige/nw-builder/commit/9d3fe0c95a8209d68055ac25a5f3581c1f6db48a))
* **deps:** bump the npm group across 1 directory with 3 updates ([#1112](https://github.com/zkrige/nw-builder/issues/1112)) ([fde3491](https://github.com/zkrige/nw-builder/commit/fde34914d920245f535184ae545a56d939c59b8d))
* **deps:** bump the npm group across 1 directory with 3 updates ([#1212](https://github.com/zkrige/nw-builder/issues/1212)) ([20b7e81](https://github.com/zkrige/nw-builder/commit/20b7e8190f022bc8a50776176bdcc70d3bdcd08f))
* **deps:** bump the npm group across 1 directory with 4 updates ([#1199](https://github.com/zkrige/nw-builder/issues/1199)) ([b07d1fc](https://github.com/zkrige/nw-builder/commit/b07d1fc09d4fcc8282b04c369725594d120af12a))
* **deps:** bump the npm group across 1 directory with 4 updates ([#1394](https://github.com/zkrige/nw-builder/issues/1394)) ([560dd73](https://github.com/zkrige/nw-builder/commit/560dd738162b10555a68109cf146725f821151eb))
* **deps:** bump the npm group across 1 directory with 5 updates ([#1371](https://github.com/zkrige/nw-builder/issues/1371)) ([ba554d2](https://github.com/zkrige/nw-builder/commit/ba554d241e7f3d33c8492b658f4d45f723834fd0))
* **deps:** bump the npm group across 1 directory with 6 updates ([#1105](https://github.com/zkrige/nw-builder/issues/1105)) ([eb63ded](https://github.com/zkrige/nw-builder/commit/eb63dedabbf2ae525fa9f1ab6aa57d9b11c63fe0))
* **deps:** bump the npm group across 1 directory with 6 updates ([#1135](https://github.com/zkrige/nw-builder/issues/1135)) ([905478a](https://github.com/zkrige/nw-builder/commit/905478a0156a9047aa10f629cb53200ee6f90e65))
* **deps:** bump the npm group across 1 directory with 6 updates ([#1185](https://github.com/zkrige/nw-builder/issues/1185)) ([f4c0822](https://github.com/zkrige/nw-builder/commit/f4c08224c7651b3eecf2353a7a50fd7cf240c2f0))
* **deps:** bump the npm group across 1 directory with 6 updates ([#1368](https://github.com/zkrige/nw-builder/issues/1368)) ([1aaffa5](https://github.com/zkrige/nw-builder/commit/1aaffa5803454e5df17c9d57f4461823f979ea88))
* **deps:** bump the npm group across 1 directory with 6 updates ([#1378](https://github.com/zkrige/nw-builder/issues/1378)) ([5df5c51](https://github.com/zkrige/nw-builder/commit/5df5c51a173d65863544751abda2a1097d9a8225))
* **deps:** bump the npm group across 1 directory with 7 updates ([#1233](https://github.com/zkrige/nw-builder/issues/1233)) ([9efa2f4](https://github.com/zkrige/nw-builder/commit/9efa2f439e46aaadf55c79d9c3bd404cea1144aa))
* **deps:** bump the npm group across 1 directory with 7 updates ([#1275](https://github.com/zkrige/nw-builder/issues/1275)) ([5f26f21](https://github.com/zkrige/nw-builder/commit/5f26f21df78997aa5add40f5c049ec7fd2917474))
* **deps:** bump the npm group across 1 directory with 8 updates ([#1177](https://github.com/zkrige/nw-builder/issues/1177)) ([9410455](https://github.com/zkrige/nw-builder/commit/94104551d8b8f8c1ece595e34caa91b3c34dc0a3))
* **deps:** bump the npm group across 1 directory with 8 updates ([#1390](https://github.com/zkrige/nw-builder/issues/1390)) ([a5ce5be](https://github.com/zkrige/nw-builder/commit/a5ce5be72cb7ed9c05837ca1f2e40dfc1b81d3af))
* **deps:** bump the npm group across 1 directory with 9 updates ([#1386](https://github.com/zkrige/nw-builder/issues/1386)) ([1f55773](https://github.com/zkrige/nw-builder/commit/1f557731367fa3c3189f3f9a2ac74f19fb378c34))
* **deps:** bump the npm group across 1 directory with 9 updates ([#1404](https://github.com/zkrige/nw-builder/issues/1404)) ([29204c1](https://github.com/zkrige/nw-builder/commit/29204c1849daf0341a226e9cf0d6fac6765a3d68))
* **deps:** bump the npm group with 1 update ([#1055](https://github.com/zkrige/nw-builder/issues/1055)) ([5a7bc71](https://github.com/zkrige/nw-builder/commit/5a7bc718a82b0907b89035412fda25cef54f32f6))
* **deps:** bump the npm group with 3 updates ([#1050](https://github.com/zkrige/nw-builder/issues/1050)) ([a70aabc](https://github.com/zkrige/nw-builder/commit/a70aabc14b5614a32d4fbfa995e35af123cef65f))
* **deps:** bump the npm group with 3 updates ([#952](https://github.com/zkrige/nw-builder/issues/952)) ([a817aa8](https://github.com/zkrige/nw-builder/commit/a817aa8baf8c2b78bb9de26a220abf13cb62e5cf))
* **deps:** bump the npm group with 3 updates ([#961](https://github.com/zkrige/nw-builder/issues/961)) ([55a35ea](https://github.com/zkrige/nw-builder/commit/55a35ea83614f9d5d2d5b304e027815f1e8f3248))
* **deps:** bump the npm group with 3 updates ([#971](https://github.com/zkrige/nw-builder/issues/971)) ([25a89c3](https://github.com/zkrige/nw-builder/commit/25a89c3d0091ac2c59ac5e99bbcfbb048099114c))
* **deps:** bump the npm group with 4 updates ([#1082](https://github.com/zkrige/nw-builder/issues/1082)) ([26cbf88](https://github.com/zkrige/nw-builder/commit/26cbf881cc7460f088ad9b5fdd84d10b5c7589ab))
* **deps:** bump the npm group with 4 updates ([#979](https://github.com/zkrige/nw-builder/issues/979)) ([cc0e1c3](https://github.com/zkrige/nw-builder/commit/cc0e1c3fa667395aa937f55abf4a16b43463c782))
* **deps:** bump the npm group with 5 updates ([#942](https://github.com/zkrige/nw-builder/issues/942)) ([d09b425](https://github.com/zkrige/nw-builder/commit/d09b42530be7cd26106c33da9cbd52e8a6a3d2dd))
* **deps:** bump the npm group with 8 updates ([#1048](https://github.com/zkrige/nw-builder/issues/1048)) ([0ca3c34](https://github.com/zkrige/nw-builder/commit/0ca3c341f312b584b37628a9d3726eca2b4584be))
* **deps:** bump vite from 5.1.6 to 5.2.8 ([#1060](https://github.com/zkrige/nw-builder/issues/1060)) ([c52dbb6](https://github.com/zkrige/nw-builder/commit/c52dbb690f46d8929dbd9ba553eb9967b7683988))
* **deps:** bump vite from 5.3.5 to 5.4.6 ([#1231](https://github.com/zkrige/nw-builder/issues/1231)) ([6135682](https://github.com/zkrige/nw-builder/commit/6135682dc01f8a1dad12660957ddd637e6a20864))
* **deps:** bump vite from 6.2.2 to 6.2.3 in the npm_and_yarn group ([#1377](https://github.com/zkrige/nw-builder/issues/1377)) ([4f4379d](https://github.com/zkrige/nw-builder/commit/4f4379dd25348cd834df078a970564a114ba5e89))
* **deps:** bump vite from 6.2.3 to 6.2.4 in the npm_and_yarn group ([#1379](https://github.com/zkrige/nw-builder/issues/1379)) ([e425d56](https://github.com/zkrige/nw-builder/commit/e425d563ae37ec2ca6419763e53508337db57d1a))
* **deps:** bump volta-cli/action from 4.1.1 to 4.2.1 in /.github/workflows in the gha group across 1 directory ([#1189](https://github.com/zkrige/nw-builder/issues/1189)) ([282ea7a](https://github.com/zkrige/nw-builder/commit/282ea7ade9d93dbbf8d97c9c0770df0876c3fd8a))
* **deps:** bump winston from 3.8.2 to 3.9.0 ([#869](https://github.com/zkrige/nw-builder/issues/869)) ([a9c9fc2](https://github.com/zkrige/nw-builder/commit/a9c9fc2316e9d71395b54732b2fa30132cfa112b))
* **deps:** bump yargs from 17.7.1 to 17.7.2 ([#855](https://github.com/zkrige/nw-builder/issues/855)) ([e54181d](https://github.com/zkrige/nw-builder/commit/e54181d402f2cefeb8c4f415cafa870b722b6790))
* **deps:** drop Dependabot support for v3 branch ([19cf479](https://github.com/zkrige/nw-builder/commit/19cf47973057c420dc0bb70ddb5e50df1aa0de4c))
* **deps:** migrate from compressing to tar and archiver ([7c73903](https://github.com/zkrige/nw-builder/commit/7c73903d6c3723814df64d9241976b457cb2d149))
* **deps:** reconfigure dependabot ([698ecd5](https://github.com/zkrige/nw-builder/commit/698ecd5817a9f4ee7e17271410ebce78157644fa))
* **deps:** remove license check logic ([9dde7b2](https://github.com/zkrige/nw-builder/commit/9dde7b2b36a1ccd0effb546a89584d2075e59a17))
* **deps:** remove unused cli-progress package ([8f4e07d](https://github.com/zkrige/nw-builder/commit/8f4e07dfbda348fcc832694d346be7616bfb1f4b))
* **deps:** upgrade to eslint v9 ([ffe6dd0](https://github.com/zkrige/nw-builder/commit/ffe6dd0238a8401fab46beed06c2812b0fa89abd))
* **doc:** `/docs` -&gt; `/doc` ([4112389](https://github.com/zkrige/nw-builder/commit/4112389ef38355d144033049dad131d7acf307ae))
* **docs:** add api ref and platform specific config options ([#846](https://github.com/zkrige/nw-builder/issues/846)) ([6623963](https://github.com/zkrige/nw-builder/commit/6623963bdc9fb8d291a24cec1c95511daa96e644))
* **docs:** add missing platform-specific app options info ([#1093](https://github.com/zkrige/nw-builder/issues/1093)) ([715097f](https://github.com/zkrige/nw-builder/commit/715097f53dfe69e7895634fd85e4043b6a3242e1))
* **docs:** clarify addon rebuilding disabled ([bb910e1](https://github.com/zkrige/nw-builder/commit/bb910e193759b6551f1681a5b2da084f9c28be27))
* **docs:** clarify CJS usage ([d673459](https://github.com/zkrige/nw-builder/commit/d673459141e68a190964c1d4f02203e32296a8b9)), closes [#1331](https://github.com/zkrige/nw-builder/issues/1331)
* **docs:** clarify non-usage of srcDir in CLi interface ([1b61bd1](https://github.com/zkrige/nw-builder/commit/1b61bd1acb58a1ea966bd3606c7d7d7140cfb1d5)), closes [#1330](https://github.com/zkrige/nw-builder/issues/1330)
* **docs:** clarify priority for defined options ([#1281](https://github.com/zkrige/nw-builder/issues/1281)) ([632db41](https://github.com/zkrige/nw-builder/commit/632db4105dd3b205d448c6fe02b26e46167d6549)), closes [#1261](https://github.com/zkrige/nw-builder/issues/1261)
* **docs:** fix CJS import usage example ([5f323df](https://github.com/zkrige/nw-builder/commit/5f323df441212d495de75a2dceda5031ddce56d5)), closes [#1331](https://github.com/zkrige/nw-builder/issues/1331)
* **docs:** improve install/quick start ([a87f44b](https://github.com/zkrige/nw-builder/commit/a87f44b5f6e0bdc0e09569a560b10a032766da02))
* **docs:** improve terminology ([84fa2a4](https://github.com/zkrige/nw-builder/commit/84fa2a4e55e88e490f46e91dade60e2ab285480b))
* **docs:** migrate from GitHub Issues to `ROADMAP.md` ([9a92688](https://github.com/zkrige/nw-builder/commit/9a92688d848a83a8317196c254009a6c1eeffa44))
* **docs:** move docs to `README.md` ([#1013](https://github.com/zkrige/nw-builder/issues/1013)) ([0119cb8](https://github.com/zkrige/nw-builder/commit/0119cb882837b834ee9d0f0b3d86585433944d25))
* **docs:** remove mention of rebuilding node addons ([e3ae5b3](https://github.com/zkrige/nw-builder/commit/e3ae5b379e302baa9bbf532d9666ea52dc2639e7))
* **docs:** update contributing guidelines ([efdbdca](https://github.com/zkrige/nw-builder/commit/efdbdca0f73a91129dc279d2f7346084f8a0cefe))
* **docs:** update contributing guidelines ([ca594df](https://github.com/zkrige/nw-builder/commit/ca594df7beaa49a95d2fa33c14ebcc120a0b6d3c))
* **docs:** update docs ([f996de2](https://github.com/zkrige/nw-builder/commit/f996de2c3fd7751cefe7649e7e36cdd622f1e15a))
* **docs:** update PR template to simplify commit descriptions ([#1029](https://github.com/zkrige/nw-builder/issues/1029)) ([6da9b89](https://github.com/zkrige/nw-builder/commit/6da9b898f74309dde6ca120dddbeaa32e7bdbcfc))
* **docs:** update readme and changelog ([63fd50b](https://github.com/zkrige/nw-builder/commit/63fd50bdbfed52de4be4332601944e058b11d793))
* enable node addon ([0e2badc](https://github.com/zkrige/nw-builder/commit/0e2badcfbf64ee0af18930da837dd86ef84ad4af)), closes [#970](https://github.com/zkrige/nw-builder/issues/970)
* **eslint:** setup stricter code styling ([833a797](https://github.com/zkrige/nw-builder/commit/833a797dce6cd61084ff602c6b12ac7fe555e564))
* extract options finder logic ([b6d5612](https://github.com/zkrige/nw-builder/commit/b6d561274be434c13311d5e1bb0b086e7a86578a))
* fix linting errors ([a7f57ed](https://github.com/zkrige/nw-builder/commit/a7f57edc281d3fecd18ba81591a12bcf744f3d14))
* fix remaining lint errors ([334ae74](https://github.com/zkrige/nw-builder/commit/334ae744d2d1d56d973145e407a987107675eb04))
* fsm -&gt; fs.promises ([08d79bf](https://github.com/zkrige/nw-builder/commit/08d79bf07c0b590a376af4cc53a37db4d75094cf))
* **get:** deprecate get mode ([#1053](https://github.com/zkrige/nw-builder/issues/1053)) ([386fc18](https://github.com/zkrige/nw-builder/commit/386fc18efc4779438591cbc3ab39c72f65473215))
* **get:** factor out ffmpeg download logic ([#1021](https://github.com/zkrige/nw-builder/issues/1021)) ([060f046](https://github.com/zkrige/nw-builder/commit/060f046892b6581f81e78ce08a3cb790dc9e3f09))
* **get:** factor out https logic ([#1016](https://github.com/zkrige/nw-builder/issues/1016)) ([9af0843](https://github.com/zkrige/nw-builder/commit/9af0843a7bfbeee8d62c7e8aff7e3a49705b124a))
* **get:** factor out node headers download logic ([#1022](https://github.com/zkrige/nw-builder/issues/1022)) ([d923a27](https://github.com/zkrige/nw-builder/commit/d923a27c93392c20370e3a8c05709314365f75cd))
* **get:** factor out nw download logic ([#1020](https://github.com/zkrige/nw-builder/issues/1020)) ([8398ad0](https://github.com/zkrige/nw-builder/commit/8398ad01230e6a9f4aeaf0cd5dc1a76f4d8074d4))
* **get:** improve error message when comparing shasums ([#1213](https://github.com/zkrige/nw-builder/issues/1213)) ([b37068f](https://github.com/zkrige/nw-builder/commit/b37068f9228c1f00877d51c5fe607be7096b6564)), closes [#1209](https://github.com/zkrige/nw-builder/issues/1209)
* **get:** refactor implementation ([#1025](https://github.com/zkrige/nw-builder/issues/1025)) ([72f65e1](https://github.com/zkrige/nw-builder/commit/72f65e134b3f5dfd543aba9d292c016da8b6d7f3))
* **get:** refactor unzip symlink implementation ([#1030](https://github.com/zkrige/nw-builder/issues/1030)) ([69661c3](https://github.com/zkrige/nw-builder/commit/69661c301278f2f4071f41fa71e909733698c680))
* **get:** simplify symlink logic ([#1035](https://github.com/zkrige/nw-builder/issues/1035)) ([4f64307](https://github.com/zkrige/nw-builder/commit/4f643077fb259fb1374e41c88abc801486f8467c)), closes [#1030](https://github.com/zkrige/nw-builder/issues/1030)
* lint codebase ([9af082c](https://github.com/zkrige/nw-builder/commit/9af082c33acf4a356bc8efa5f005d268d817efe3))
* **main:** release 4.10.0 ([#1204](https://github.com/zkrige/nw-builder/issues/1204)) ([a1db9b9](https://github.com/zkrige/nw-builder/commit/a1db9b9d936f1aa13258658121c7c7c4d27febd8))
* **main:** release 4.11.0 ([#1215](https://github.com/zkrige/nw-builder/issues/1215)) ([1de38a9](https://github.com/zkrige/nw-builder/commit/1de38a9ad74dd9fad40ac90836c158fdef8e283a))
* **main:** release 4.11.1 ([#1242](https://github.com/zkrige/nw-builder/issues/1242)) ([c038327](https://github.com/zkrige/nw-builder/commit/c0383277ebfca3e0902a4b2796ce8bf03eb21e3c))
* **main:** release 4.11.2 ([#1252](https://github.com/zkrige/nw-builder/issues/1252)) ([ac2d603](https://github.com/zkrige/nw-builder/commit/ac2d603fb7bf13cbf2ee68cf703f3e4674201882))
* **main:** release 4.11.3 ([#1254](https://github.com/zkrige/nw-builder/issues/1254)) ([9bfe70f](https://github.com/zkrige/nw-builder/commit/9bfe70fad6da17db23da22a862815b9ab3903f24))
* **main:** release 4.11.4 ([#1271](https://github.com/zkrige/nw-builder/issues/1271)) ([ef120b2](https://github.com/zkrige/nw-builder/commit/ef120b20b097f2706939864f7e9a62a665902342))
* **main:** release 4.11.5 ([#1282](https://github.com/zkrige/nw-builder/issues/1282)) ([a173040](https://github.com/zkrige/nw-builder/commit/a173040cda63cc9a99ea18910ac383e2d9a06113))
* **main:** release 4.11.6 ([#1291](https://github.com/zkrige/nw-builder/issues/1291)) ([89f7d64](https://github.com/zkrige/nw-builder/commit/89f7d64a8c62feef69b6ddaef00a5b1d8aef6f16))
* **main:** release 4.12.0 ([#1297](https://github.com/zkrige/nw-builder/issues/1297)) ([028d908](https://github.com/zkrige/nw-builder/commit/028d908a2c4b5f16247b09801cc767a18b731383))
* **main:** release 4.12.1 ([#1306](https://github.com/zkrige/nw-builder/issues/1306)) ([6cc460d](https://github.com/zkrige/nw-builder/commit/6cc460de9aaa17ef6f059ab467c45d86020965f9))
* **main:** release 4.13.0 ([#1308](https://github.com/zkrige/nw-builder/issues/1308)) ([b9e89ec](https://github.com/zkrige/nw-builder/commit/b9e89ec3575ea6379f351f85122f9ee26d8f5e98))
* **main:** release 4.13.1 ([#1309](https://github.com/zkrige/nw-builder/issues/1309)) ([6ab1ea3](https://github.com/zkrige/nw-builder/commit/6ab1ea3d91324fc6686585fda952e8e8742fbbe2))
* **main:** release 4.13.10 ([#1367](https://github.com/zkrige/nw-builder/issues/1367)) ([af97fd5](https://github.com/zkrige/nw-builder/commit/af97fd5ca15f8c176fe18f58d1804a20227e1ccb))
* **main:** release 4.13.11 ([#1372](https://github.com/zkrige/nw-builder/issues/1372)) ([36a9530](https://github.com/zkrige/nw-builder/commit/36a9530929c0da62a543e9e05d5804255b76200b))
* **main:** release 4.13.12 ([#1374](https://github.com/zkrige/nw-builder/issues/1374)) ([78c9e38](https://github.com/zkrige/nw-builder/commit/78c9e38788bea344ac0bcceffd000928447e616b))
* **main:** release 4.13.13 ([#1391](https://github.com/zkrige/nw-builder/issues/1391)) ([f7a9f25](https://github.com/zkrige/nw-builder/commit/f7a9f25f56822b5ef0fed1683052e6c27a6bde22))
* **main:** release 4.13.14 ([#1395](https://github.com/zkrige/nw-builder/issues/1395)) ([6292221](https://github.com/zkrige/nw-builder/commit/62922218f1c1487b856c5dcbaf301a90a7e88dae))
* **main:** release 4.13.2 ([#1310](https://github.com/zkrige/nw-builder/issues/1310)) ([33e1ebd](https://github.com/zkrige/nw-builder/commit/33e1ebdf35ec97bf3b61dc7ca2eedb2e44e660c0))
* **main:** release 4.13.3 ([#1311](https://github.com/zkrige/nw-builder/issues/1311)) ([2dbd51d](https://github.com/zkrige/nw-builder/commit/2dbd51de79e44f4aa5a1f1fce4ef39a1a14f07df))
* **main:** release 4.13.4 ([#1313](https://github.com/zkrige/nw-builder/issues/1313)) ([2ce60ee](https://github.com/zkrige/nw-builder/commit/2ce60eef088bd57e59312a8cc0e60d32811707fc))
* **main:** release 4.13.5 ([#1314](https://github.com/zkrige/nw-builder/issues/1314)) ([de40e01](https://github.com/zkrige/nw-builder/commit/de40e0170e3925f128aa94c2750cdccfb7cc5d99))
* **main:** release 4.13.6 ([#1315](https://github.com/zkrige/nw-builder/issues/1315)) ([5d84eea](https://github.com/zkrige/nw-builder/commit/5d84eeab14e25dab2fa560edf3e09e60b604e644))
* **main:** release 4.13.7 ([#1318](https://github.com/zkrige/nw-builder/issues/1318)) ([c047055](https://github.com/zkrige/nw-builder/commit/c0470553e003b972ef33e8b0a83f539a1e114930))
* **main:** release 4.13.8 ([#1325](https://github.com/zkrige/nw-builder/issues/1325)) ([ce71ec8](https://github.com/zkrige/nw-builder/commit/ce71ec83bfba657e6c0c6cddad38b1e3e24ebc66))
* **main:** release 4.13.9 ([#1359](https://github.com/zkrige/nw-builder/issues/1359)) ([14b95cf](https://github.com/zkrige/nw-builder/commit/14b95cfc69ce7680f7a90bcc4e25535c9a04d4d6))
* **main:** release 4.6.0 ([#1024](https://github.com/zkrige/nw-builder/issues/1024)) ([4ab7b8d](https://github.com/zkrige/nw-builder/commit/4ab7b8d2a1453ebbdd65aea6518b789d64e833a4))
* **main:** release 4.6.1 ([#1034](https://github.com/zkrige/nw-builder/issues/1034)) ([b94decf](https://github.com/zkrige/nw-builder/commit/b94decf58333915b439a665e5be8b7da6b1209e7))
* **main:** release 4.6.2 ([#1039](https://github.com/zkrige/nw-builder/issues/1039)) ([0a8cba3](https://github.com/zkrige/nw-builder/commit/0a8cba3a7e7b82a93f4970a763390294508a3b16))
* **main:** release 4.6.3 ([#1043](https://github.com/zkrige/nw-builder/issues/1043)) ([6e76c0f](https://github.com/zkrige/nw-builder/commit/6e76c0f641a9e3518af68a2e8f3ab1f2dc3d5024))
* **main:** release 4.6.4 ([#1045](https://github.com/zkrige/nw-builder/issues/1045)) ([f919b8b](https://github.com/zkrige/nw-builder/commit/f919b8bac5fe4830c3a331479567a07f2be7540b))
* **main:** release 4.7.0 ([#1049](https://github.com/zkrige/nw-builder/issues/1049)) ([5f6478a](https://github.com/zkrige/nw-builder/commit/5f6478a05917f7f798f863e964365872fd10e2c2))
* **main:** release 4.7.1 ([#1056](https://github.com/zkrige/nw-builder/issues/1056)) ([63c1ba9](https://github.com/zkrige/nw-builder/commit/63c1ba9ed09c29c2890ecaa4050a36f12af426c9))
* **main:** release 4.7.2 ([#1061](https://github.com/zkrige/nw-builder/issues/1061)) ([be70eae](https://github.com/zkrige/nw-builder/commit/be70eae75ef81bfa43216de9c98a5185cd286163))
* **main:** release 4.7.3 ([#1080](https://github.com/zkrige/nw-builder/issues/1080)) ([a221783](https://github.com/zkrige/nw-builder/commit/a2217831f49c19a46fb38e977868e6ecbe44eb28))
* **main:** release 4.7.4 ([#1085](https://github.com/zkrige/nw-builder/issues/1085)) ([e1430dd](https://github.com/zkrige/nw-builder/commit/e1430ddcce1bc9b770ebfff1b3be48d7a7412063))
* **main:** release 4.7.5 ([#1092](https://github.com/zkrige/nw-builder/issues/1092)) ([7f8eb5f](https://github.com/zkrige/nw-builder/commit/7f8eb5f492d59929f30a4284ea9dee17e24103bf))
* **main:** release 4.7.6 ([#1121](https://github.com/zkrige/nw-builder/issues/1121)) ([b4cb5fa](https://github.com/zkrige/nw-builder/commit/b4cb5fa3d240214401a02dc38884f5d6cdd11470))
* **main:** release 4.7.7 ([#1133](https://github.com/zkrige/nw-builder/issues/1133)) ([1cdbdd1](https://github.com/zkrige/nw-builder/commit/1cdbdd1bfe0f7cc15b43c60e6afd2e433d6441f4))
* **main:** release 4.7.8 ([#1137](https://github.com/zkrige/nw-builder/issues/1137)) ([cbb596c](https://github.com/zkrige/nw-builder/commit/cbb596cd68617072f848ee3961a3a20c368b7ad2))
* **main:** release 4.8.0 ([#1155](https://github.com/zkrige/nw-builder/issues/1155)) ([c742e32](https://github.com/zkrige/nw-builder/commit/c742e32bf37d0697dcebcd063466b4b2997506cb))
* **main:** release 4.8.1 ([#1178](https://github.com/zkrige/nw-builder/issues/1178)) ([5f9a11f](https://github.com/zkrige/nw-builder/commit/5f9a11fc7121de1514bc10d412671c103938858f))
* **main:** release 4.9.0 ([#1197](https://github.com/zkrige/nw-builder/issues/1197)) ([ff4353e](https://github.com/zkrige/nw-builder/commit/ff4353e12db3b957f5051747782ebd84b479d5a0))
* migration guide, add back `argv` option, update docs, release v4.0.3 ([#740](https://github.com/zkrige/nw-builder/issues/740)) ([0f915e7](https://github.com/zkrige/nw-builder/commit/0f915e758fbf5a7bce1e86442080a4d3a16ad84c))
* move tests dir ([72cd127](https://github.com/zkrige/nw-builder/commit/72cd127dfcbbe78d5ac39e2b3b448313df8ed3f2))
* **node:test:** migrate to `vitest` ([#1014](https://github.com/zkrige/nw-builder/issues/1014)) ([b06f052](https://github.com/zkrige/nw-builder/commit/b06f0527fd6f0ad07de5bf168c032453e1175d07))
* release 4.5.1 ([fdd8fc0](https://github.com/zkrige/nw-builder/commit/fdd8fc005bac6409278435f721437c463f6ee2d2))
* release 4.5.3 ([6495f81](https://github.com/zkrige/nw-builder/commit/6495f81b2d1a174bb855b57a84f2a774ab805309))
* release v4.2.1 ([b0e84a4](https://github.com/zkrige/nw-builder/commit/b0e84a44da40f96cb974504a187cacd39ed17cb8))
* release v4.5.0 ([ac79cea](https://github.com/zkrige/nw-builder/commit/ac79cea216a133152272b90dca3afce794f09fd7))
* **release-please-action:** do not point to manifest file ([96eeec8](https://github.com/zkrige/nw-builder/commit/96eeec806e1aba0b62acd899d5b9e98070a32b64))
* **release-please-action:** point to config and manifest ([0a6a44d](https://github.com/zkrige/nw-builder/commit/0a6a44db44ae19c246221f7f05450f6ef1e9f646))
* **release-please:** correct path to package ([3719cee](https://github.com/zkrige/nw-builder/commit/3719cee4571b46b6b4c2c4d2b6806864e3c90c16))
* **release-please:** remove manifest ([23a16fb](https://github.com/zkrige/nw-builder/commit/23a16fbd5e93c3ad1221dad6106299079f81ea7c))
* **release:** update vulnerable dep in v4.0.11 ([7f9ed12](https://github.com/zkrige/nw-builder/commit/7f9ed12a4edff45d1473f525f4c7d96100f997b9))
* remove `.prettierignore` ([cbfc390](https://github.com/zkrige/nw-builder/commit/cbfc3904a1dec9a2f58e9b1ea774724fce3da304))
* remove unused utilities ([7c2c228](https://github.com/zkrige/nw-builder/commit/7c2c228e9b5fb98a63e76a05b3868d78b6750403))
* remove unused variable ([a7bf0ed](https://github.com/zkrige/nw-builder/commit/a7bf0ed97d74eb72f12be78d4d99d2e495ade0de))
* rename `src/build.js` to `src/bld.js` ([c17034b](https://github.com/zkrige/nw-builder/commit/c17034b9d71370c1f80674ddb2ede3a0e1442aa9))
* reverse undeprecation of get and run mode ([e139740](https://github.com/zkrige/nw-builder/commit/e1397405929302f07d5bd1bcec913550050c3aa0))
* **run:** mark run mode as deprecated ([#1027](https://github.com/zkrige/nw-builder/issues/1027)) ([1115728](https://github.com/zkrige/nw-builder/commit/1115728d433cba123a7e2dd54a52abaaed4710a6))
* **test:** `flavour` -&gt; `flavor` ([e223f4e](https://github.com/zkrige/nw-builder/commit/e223f4eeab53192e46b82e406c2e65de59d48a92))
* **test:** download latest NW.js version for Linux demo app ([8c09908](https://github.com/zkrige/nw-builder/commit/8c09908943eba0414b03a7e79c2a87a5f076bfff)), closes [#1324](https://github.com/zkrige/nw-builder/issues/1324)
* **test:** enable e2e tests ([#1120](https://github.com/zkrige/nw-builder/issues/1120)) ([f802947](https://github.com/zkrige/nw-builder/commit/f80294712240caf8ccf225684eaec20ecb5f80a8))
* **test:** enable vitest json reporter ([e44aadb](https://github.com/zkrige/nw-builder/commit/e44aadb880b794b99516069d2c40473a72f18dc5))
* **test:** move tests to seperate dir ([#1205](https://github.com/zkrige/nw-builder/issues/1205)) ([da0e353](https://github.com/zkrige/nw-builder/commit/da0e353e805b8e4b249f298c74a352a114b2737d))
* **test:** rename fixtures dir ([c6193bb](https://github.com/zkrige/nw-builder/commit/c6193bb67fa32d750b42f9a8a7d44db507126519))
* **test:** try adding chores to release notes ([#1031](https://github.com/zkrige/nw-builder/issues/1031)) ([5cabc20](https://github.com/zkrige/nw-builder/commit/5cabc20e79bb0fe0d77687f97ac4fae8fc3e95a9))
* **test:** use `chromedriver` for e2e tests ([#796](https://github.com/zkrige/nw-builder/issues/796)) ([0743355](https://github.com/zkrige/nw-builder/commit/074335575e7bec2616ca8f4e1d4ba13073cb2c00))
* update to NW.js v0.75.0 ([2a662c6](https://github.com/zkrige/nw-builder/commit/2a662c61f79ad01edc73a2c049eaf36ab890f37f))
* use new nw download functions ([851afad](https://github.com/zkrige/nw-builder/commit/851afad4f8ed37e6cc55a143d4e02002b01ca8d0))

## [4.13.14](https://github.com/nwutils/nw-builder/compare/v4.13.13...v4.13.14) (2025-05-14)


### Bug Fixes

* **bld:** disable rebuilding Node addons ([464dca2](https://github.com/nwutils/nw-builder/commit/464dca25759c1ae6960977b1e83bdf03b57d2bb2))


### Chores

* **ci:** check for NPM_TOKEN in separate job ([74ca486](https://github.com/nwutils/nw-builder/commit/74ca486a8f8660636e5d17fec9c5ce40e36f9cae))
* **deps:** bump the npm group across 1 directory with 4 updates ([#1394](https://github.com/nwutils/nw-builder/issues/1394)) ([560dd73](https://github.com/nwutils/nw-builder/commit/560dd738162b10555a68109cf146725f821151eb))
* **docs:** clarify addon rebuilding disabled ([bb910e1](https://github.com/nwutils/nw-builder/commit/bb910e193759b6551f1681a5b2da084f9c28be27))
* **docs:** remove mention of rebuilding node addons ([e3ae5b3](https://github.com/nwutils/nw-builder/commit/e3ae5b379e302baa9bbf532d9666ea52dc2639e7))

## [4.13.13](https://github.com/nwutils/nw-builder/compare/v4.13.12...v4.13.13) (2025-05-07)


### Bug Fixes

* **security:** use execFileSync instead of execSync ([48193f0](https://github.com/nwutils/nw-builder/commit/48193f0e14cae4f02a8217df736d056204f446d9))

## [4.13.12](https://github.com/nwutils/nw-builder/compare/v4.13.11...v4.13.12) (2025-05-06)


### Bug Fixes

* **util:** specify default values in CLI invocation ([3b3799d](https://github.com/nwutils/nw-builder/commit/3b3799d6923c3b2a2c361f26978f35dd35d089ac))


### Chores

* **ci:** check if NPM_TOKEN exists as action step ([6b7e64e](https://github.com/nwutils/nw-builder/commit/6b7e64ed100789c314f97cc786ad59fbdff5bca1))
* **ci:** fail if NPM_TOKEN not set ([84484a1](https://github.com/nwutils/nw-builder/commit/84484a1fcd9e307d6225a4b453f778e3f44fd542))
* **ci:** move NPM_TOKEN conditional inside action steps ([ea6ea4c](https://github.com/nwutils/nw-builder/commit/ea6ea4c0d63184822a69ec2627a361892a6121d7))
* **ci:** set continue-on-error to false ([3b9a8a2](https://github.com/nwutils/nw-builder/commit/3b9a8a29030a27fbc4792b367e2c91158b3e60b3))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.8.1 to 2.8.2 in /.github/workflows in the gha group ([#1388](https://github.com/nwutils/nw-builder/issues/1388)) ([7a51dd4](https://github.com/nwutils/nw-builder/commit/7a51dd4fac0c70b8c23f2a345eb130e9e007dc97))
* **deps:** bump the gha group across 1 directory with 2 updates ([#1385](https://github.com/nwutils/nw-builder/issues/1385)) ([2a98e27](https://github.com/nwutils/nw-builder/commit/2a98e27868d149323fa2ef39dd1eeaaad77e464f))
* **deps:** bump the npm group across 1 directory with 6 updates ([#1378](https://github.com/nwutils/nw-builder/issues/1378)) ([5df5c51](https://github.com/nwutils/nw-builder/commit/5df5c51a173d65863544751abda2a1097d9a8225))
* **deps:** bump the npm group across 1 directory with 8 updates ([#1390](https://github.com/nwutils/nw-builder/issues/1390)) ([a5ce5be](https://github.com/nwutils/nw-builder/commit/a5ce5be72cb7ed9c05837ca1f2e40dfc1b81d3af))
* **deps:** bump the npm group across 1 directory with 9 updates ([#1386](https://github.com/nwutils/nw-builder/issues/1386)) ([1f55773](https://github.com/nwutils/nw-builder/commit/1f557731367fa3c3189f3f9a2ac74f19fb378c34))
* **deps:** bump vite from 6.2.2 to 6.2.3 in the npm_and_yarn group ([#1377](https://github.com/nwutils/nw-builder/issues/1377)) ([4f4379d](https://github.com/nwutils/nw-builder/commit/4f4379dd25348cd834df078a970564a114ba5e89))
* **deps:** bump vite from 6.2.3 to 6.2.4 in the npm_and_yarn group ([#1379](https://github.com/nwutils/nw-builder/issues/1379)) ([e425d56](https://github.com/nwutils/nw-builder/commit/e425d563ae37ec2ca6419763e53508337db57d1a))

## [4.13.11](https://github.com/nwutils/nw-builder/compare/v4.13.10...v4.13.11) (2025-03-19)


### Bug Fixes

* **util:** use strict boolean check for glob flag ([63c931d](https://github.com/nwutils/nw-builder/commit/63c931dad34c2b5449c74b540924a91d8ed51685))


### Chores

* **ci:** add concurrency ([41494f5](https://github.com/nwutils/nw-builder/commit/41494f535a583ba2a69daa651b8d1582726a4ad7))
* **ci:** do not run npm publish job if NPM_TOKEN is not available ([e21051c](https://github.com/nwutils/nw-builder/commit/e21051cc8098f12d1006e184108755a88f435517))
* **deps:** bump @babel/runtime from 7.26.0 to 7.26.10 in the npm_and_yarn group ([#1373](https://github.com/nwutils/nw-builder/issues/1373)) ([0b2d34e](https://github.com/nwutils/nw-builder/commit/0b2d34e11d9bf939a9e608bb6ca6415a929457e0))
* **deps:** bump actions/setup-node from 4.2.0 to 4.3.0 in /.github/workflows in the gha group ([#1370](https://github.com/nwutils/nw-builder/issues/1370)) ([5509ca9](https://github.com/nwutils/nw-builder/commit/5509ca93acd5fa68f9e860f1ff3c30d96ea739b1))
* **deps:** bump the npm group across 1 directory with 5 updates ([#1371](https://github.com/nwutils/nw-builder/issues/1371)) ([ba554d2](https://github.com/nwutils/nw-builder/commit/ba554d241e7f3d33c8492b658f4d45f723834fd0))

## [4.13.10](https://github.com/nwutils/nw-builder/compare/v4.13.9...v4.13.10) (2025-03-11)


### Bug Fixes

* **ci:** give release please write permissions ([920e4a0](https://github.com/nwutils/nw-builder/commit/920e4a02863d71d0acac374678d3c017070a1e9f))
* **codeql:** address code scanning alerts ([#1360](https://github.com/nwutils/nw-builder/issues/1360)) ([10cb3ba](https://github.com/nwutils/nw-builder/commit/10cb3baa94803bcf0e119333a0c253e14f8bf00f))


### Chores

* **deps:** bump googleapis/release-please-action from 4.1.4 to 4.2.0 in /.github/workflows in the gha group across 1 directory ([#1364](https://github.com/nwutils/nw-builder/issues/1364)) ([0f28592](https://github.com/nwutils/nw-builder/commit/0f28592f543b62af07b9b4f8aa291712e4e45432))
* **deps:** bump the npm group across 1 directory with 6 updates ([#1368](https://github.com/nwutils/nw-builder/issues/1368)) ([1aaffa5](https://github.com/nwutils/nw-builder/commit/1aaffa5803454e5df17c9d57f4461823f979ea88))

## [4.13.9](https://github.com/nwutils/nw-builder/compare/v4.13.8...v4.13.9) (2025-03-06)


### Bug Fixes

* **get/verify:** use crypto.timingSafeEqual to verify shasums ([3dd449a](https://github.com/nwutils/nw-builder/commit/3dd449aaa55a8f646027f7f454afbe0dc74db35b))


### Chores

* **deps:** bump the gha group across 1 directory with 2 updates ([#1358](https://github.com/nwutils/nw-builder/issues/1358)) ([48e4947](https://github.com/nwutils/nw-builder/commit/48e49474c5aa0c13add585489ae74b6d9adef541))
* **deps:** bump the npm group across 1 directory with 13 updates ([#1357](https://github.com/nwutils/nw-builder/issues/1357)) ([9d3fe0c](https://github.com/nwutils/nw-builder/commit/9d3fe0c95a8209d68055ac25a5f3581c1f6db48a))
* reverse undeprecation of get and run mode ([e139740](https://github.com/nwutils/nw-builder/commit/e1397405929302f07d5bd1bcec913550050c3aa0))

## [4.13.8](https://github.com/nwutils/nw-builder/compare/v4.13.7...v4.13.8) (2025-01-01)


### Bug Fixes

* **bld:** await archiver.finalize ([#1333](https://github.com/nwutils/nw-builder/issues/1333)) ([580668f](https://github.com/nwutils/nw-builder/commit/580668f7a56d050d43078c7e0014eacdc3ee7dfc)), closes [#1328](https://github.com/nwutils/nw-builder/issues/1328)


### Chores

* **deps:** bump the npm group across 1 directory with 11 updates ([#1332](https://github.com/nwutils/nw-builder/issues/1332)) ([b9b96ff](https://github.com/nwutils/nw-builder/commit/b9b96ff565921a518893770996568bb30cee179b))
* **docs:** clarify CJS usage ([d673459](https://github.com/nwutils/nw-builder/commit/d673459141e68a190964c1d4f02203e32296a8b9)), closes [#1331](https://github.com/nwutils/nw-builder/issues/1331)
* **docs:** clarify non-usage of srcDir in CLi interface ([1b61bd1](https://github.com/nwutils/nw-builder/commit/1b61bd1acb58a1ea966bd3606c7d7d7140cfb1d5)), closes [#1330](https://github.com/nwutils/nw-builder/issues/1330)
* **docs:** fix CJS import usage example ([5f323df](https://github.com/nwutils/nw-builder/commit/5f323df441212d495de75a2dceda5031ddce56d5)), closes [#1331](https://github.com/nwutils/nw-builder/issues/1331)
* **test:** download latest NW.js version for Linux demo app ([8c09908](https://github.com/nwutils/nw-builder/commit/8c09908943eba0414b03a7e79c2a87a5f076bfff)), closes [#1324](https://github.com/nwutils/nw-builder/issues/1324)

## [4.13.7](https://github.com/nwutils/nw-builder/compare/v4.13.6...v4.13.7) (2024-11-28)


### Bug Fixes

* **get:** use \s+ to split lines containing shasum info ([64f5709](https://github.com/nwutils/nw-builder/commit/64f5709f230199e3d6a6e837e95ec4e0f74dc806)), closes [#1317](https://github.com/nwutils/nw-builder/issues/1317)

## [4.13.6](https://github.com/nwutils/nw-builder/compare/v4.13.5...v4.13.6) (2024-11-26)


### Bug Fixes

* **bld:** fs.promises.copyFile -&gt; fs.promises.cp ([c1909c7](https://github.com/nwutils/nw-builder/commit/c1909c7d84e1513339625667fc6cab1525677f3b))

## [4.13.5](https://github.com/nwutils/nw-builder/compare/v4.13.4...v4.13.5) (2024-11-26)


### Bug Fixes

* **util:** validate windows options.app.* iff defined ([8a65a6d](https://github.com/nwutils/nw-builder/commit/8a65a6dfc6e3bb16431b81b751140ec7a4056496))

## [4.13.4](https://github.com/nwutils/nw-builder/compare/v4.13.3...v4.13.4) (2024-11-26)


### Bug Fixes

* **util:** validate options.app.company iff defined ([a273e23](https://github.com/nwutils/nw-builder/commit/a273e2335c29922e662b7cc69aeeb0ffe40fba33))

## [4.13.3](https://github.com/nwutils/nw-builder/compare/v4.13.2...v4.13.3) (2024-11-25)


### Bug Fixes

* **bld:** correct fs.promises.copyFile function call ([63fd422](https://github.com/nwutils/nw-builder/commit/63fd422575828dd6be43455e4274abadb4240fbe))

## [4.13.2](https://github.com/nwutils/nw-builder/compare/v4.13.1...v4.13.2) (2024-11-25)


### Bug Fixes

* **bld:** parse options.app.icon correctly during build mode ([bd0ef96](https://github.com/nwutils/nw-builder/commit/bd0ef96f50660be90398e1075434ef003112bbc5))
* **bld:** use fs.promises.copyFile to copy app files in build mode with glob enabled ([e1843f0](https://github.com/nwutils/nw-builder/commit/e1843f00c6f2ec389933565ba0b3975c2c93bc23))

## [4.13.1](https://github.com/nwutils/nw-builder/compare/v4.13.0...v4.13.1) (2024-11-24)


### Bug Fixes

* **run:** return NW.js Node process during run mode from nwbuild function ([fa94df2](https://github.com/nwutils/nw-builder/commit/fa94df284c3e6d23e0efd44d363b71b564cf1f26))
* **types:** correct nwbuild function return type ([b274d27](https://github.com/nwutils/nw-builder/commit/b274d27dbb843b76e26be751249b994f233ac696))

## [4.13.0](https://github.com/nwutils/nw-builder/compare/v4.12.1...v4.13.0) (2024-11-24)


### Features

* **get:** add options.shaSum to enable/disable shasum checks ([#1307](https://github.com/nwutils/nw-builder/issues/1307)) ([98abcaf](https://github.com/nwutils/nw-builder/commit/98abcafeb884a42c34208a6a83f37eb7d518122c))

## [4.12.1](https://github.com/nwutils/nw-builder/compare/v4.12.0...v4.12.1) (2024-11-24)


### Bug Fixes

* **util:** correct Array.isArray usage ([31c4132](https://github.com/nwutils/nw-builder/commit/31c4132bc3313c687f85e7b9ecf2562c483b6639))

## [4.12.0](https://github.com/nwutils/nw-builder/compare/v4.11.6...v4.12.0) (2024-11-21)


### Features

* **run:** return NW.js process reference ([#1304](https://github.com/nwutils/nw-builder/issues/1304)) ([bd2f926](https://github.com/nwutils/nw-builder/commit/bd2f9263d6bf61a98db2e0ec14c5d0ca68aa4b0f))


### Bug Fixes

* miscellaneous quality of life improvements ([#1296](https://github.com/nwutils/nw-builder/issues/1296)) ([a82c140](https://github.com/nwutils/nw-builder/commit/a82c140bd6ebd234dcfe5bb0bff668cfb18d60bc))
* **util:** validate options.* correctly ([#1298](https://github.com/nwutils/nw-builder/issues/1298)) ([3034f5c](https://github.com/nwutils/nw-builder/commit/3034f5cd4214f9b1e4ee5d459a20463eb4d0a50d))
* **util:** validate options.app.* values ([#1302](https://github.com/nwutils/nw-builder/issues/1302)) ([4f388a9](https://github.com/nwutils/nw-builder/commit/4f388a95b3ad634330290ddbc9afca9ab1cda576)), closes [#1279](https://github.com/nwutils/nw-builder/issues/1279) [#1293](https://github.com/nwutils/nw-builder/issues/1293)


### Chores

* **deps-dev:** bump the npm group across 1 directory with 6 updates ([#1301](https://github.com/nwutils/nw-builder/issues/1301)) ([56c1192](https://github.com/nwutils/nw-builder/commit/56c11929d1ae0bce83f4f12ba6fd315d70fd43f3))
* **deps:** bump cross-spawn from 7.0.3 to 7.0.6 ([#1305](https://github.com/nwutils/nw-builder/issues/1305)) ([2803af3](https://github.com/nwutils/nw-builder/commit/2803af3d46ff49bb87487ce3ce59de764ee57cbd))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.6.0 to 2.7.0 in /.github/workflows in the gha group ([#1295](https://github.com/nwutils/nw-builder/issues/1295)) ([23aaad8](https://github.com/nwutils/nw-builder/commit/23aaad85322ac5eb2a3ccb8546a43884c4d89b04))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.7.0 to 2.8.0 in /.github/workflows in the gha group ([#1303](https://github.com/nwutils/nw-builder/issues/1303)) ([ceaf348](https://github.com/nwutils/nw-builder/commit/ceaf348f2d62243576f0c8b6ff57aab1ea1848dc))

## [4.11.6](https://github.com/nwutils/nw-builder/compare/v4.11.5...v4.11.6) (2024-11-01)


### Bug Fixes

* **bld:** set product_string property in manifest to rename MacOS Helper apps ([#1290](https://github.com/nwutils/nw-builder/issues/1290)) ([b1caad7](https://github.com/nwutils/nw-builder/commit/b1caad7343c95f8f37251f3b3132f86adc31f38a)), closes [#1286](https://github.com/nwutils/nw-builder/issues/1286)

## [4.11.5](https://github.com/nwutils/nw-builder/compare/v4.11.4...v4.11.5) (2024-11-01)


### Bug Fixes

* **cli:** handle boolean type options correctly ([#1255](https://github.com/nwutils/nw-builder/issues/1255)) ([524fe34](https://github.com/nwutils/nw-builder/commit/524fe34438493d3aa0f4236741d91462cfb068e3)), closes [#1277](https://github.com/nwutils/nw-builder/issues/1277)


### Chores

* **deps-dev:** bump nw from 0.92.0 to 0.93.0 in the npm group across 1 directory ([#1289](https://github.com/nwutils/nw-builder/issues/1289)) ([ed275ad](https://github.com/nwutils/nw-builder/commit/ed275ad120105d8b5d8f324e97b311c791a92d1a))
* **deps:** bump the gha group across 1 directory with 2 updates ([#1285](https://github.com/nwutils/nw-builder/issues/1285)) ([13081c9](https://github.com/nwutils/nw-builder/commit/13081c918ce2b76cf39a31b8b25ef26e3903f91c))
* **docs:** clarify priority for defined options ([#1281](https://github.com/nwutils/nw-builder/issues/1281)) ([632db41](https://github.com/nwutils/nw-builder/commit/632db4105dd3b205d448c6fe02b26e46167d6549)), closes [#1261](https://github.com/nwutils/nw-builder/issues/1261)
* **docs:** improve terminology ([84fa2a4](https://github.com/nwutils/nw-builder/commit/84fa2a4e55e88e490f46e91dade60e2ab285480b))

## [4.11.4](https://github.com/nwutils/nw-builder/compare/v4.11.3...v4.11.4) (2024-10-13)


### Bug Fixes

* **util:** strip special and control characters from app.name ([#1259](https://github.com/nwutils/nw-builder/issues/1259)) ([b035bc3](https://github.com/nwutils/nw-builder/commit/b035bc3d7393b7ae15c3996e62eb24afbf691945))


### Chores

* **deps:** bump actions/checkout from 4.2.0 to 4.2.1 in /.github/workflows in the gha group ([#1273](https://github.com/nwutils/nw-builder/issues/1273)) ([3165f2b](https://github.com/nwutils/nw-builder/commit/3165f2b0a6da286295ddc94b4178b7567d394043))
* **deps:** bump the npm group across 1 directory with 7 updates ([#1275](https://github.com/nwutils/nw-builder/issues/1275)) ([5f26f21](https://github.com/nwutils/nw-builder/commit/5f26f21df78997aa5add40f5c049ec7fd2917474))
* **deps:** drop Dependabot support for v3 branch ([19cf479](https://github.com/nwutils/nw-builder/commit/19cf47973057c420dc0bb70ddb5e50df1aa0de4c))

## [4.11.3](https://github.com/nwutils/nw-builder/compare/v4.11.2...v4.11.3) (2024-10-02)


### Bug Fixes

* **get:** do not check integrity of community ffmpeg but give a warning ([#1253](https://github.com/nwutils/nw-builder/issues/1253)) ([0c05a34](https://github.com/nwutils/nw-builder/commit/0c05a3493c25a172c018e0d788a563c80592c2ef)), closes [#1209](https://github.com/nwutils/nw-builder/issues/1209)

## [4.11.2](https://github.com/nwutils/nw-builder/compare/v4.11.1...v4.11.2) (2024-10-02)


### Bug Fixes

* **get:** verify shasum for official ffmpeg not community ffmpeg ([#1251](https://github.com/nwutils/nw-builder/issues/1251)) ([9385836](https://github.com/nwutils/nw-builder/commit/938583602788f55f1e050013e78890118e19ed7a)), closes [#1209](https://github.com/nwutils/nw-builder/issues/1209)

## [4.11.1](https://github.com/nwutils/nw-builder/compare/v4.11.0...v4.11.1) (2024-10-01)


### Bug Fixes

* **types:** add managedManifest parameter in options ([#1249](https://github.com/nwutils/nw-builder/issues/1249)) ([8b3b407](https://github.com/nwutils/nw-builder/commit/8b3b407ab96e8f4162abf92b6e8158923f71687f)), closes [#1248](https://github.com/nwutils/nw-builder/issues/1248)


### Chores

* **deps-dev:** bump the npm group across 1 directory with 6 updates ([#1250](https://github.com/nwutils/nw-builder/issues/1250)) ([94da963](https://github.com/nwutils/nw-builder/commit/94da963848ef2f311d13da49a1d78e6b8f117b22))
* **deps:** bump rollup from 4.22.1 to 4.22.4 ([#1241](https://github.com/nwutils/nw-builder/issues/1241)) ([6601ebc](https://github.com/nwutils/nw-builder/commit/6601ebc3db46e28964e0aa05de37a2f68745ba46))
* **deps:** bump the gha group across 1 directory with 2 updates ([#1247](https://github.com/nwutils/nw-builder/issues/1247)) ([526454e](https://github.com/nwutils/nw-builder/commit/526454e276c67bac435c02699109ae563fe1c4d7))

## [4.11.0](https://github.com/nwutils/nw-builder/compare/v4.10.0...v4.11.0) (2024-09-20)


### Features

* **bld:** add NSLocalNetworkUsageDescription option for MacOS ([#1236](https://github.com/nwutils/nw-builder/issues/1236)) ([eea3f69](https://github.com/nwutils/nw-builder/commit/eea3f69ee1951e24f4fbc8d1550b0bee1e43951f)), closes [#1235](https://github.com/nwutils/nw-builder/issues/1235)


### Chores

* **bld:** remove repetitive code for updating MacOS Helper apps ([#1214](https://github.com/nwutils/nw-builder/issues/1214)) ([e1edc05](https://github.com/nwutils/nw-builder/commit/e1edc051c1660ef474643b903ac4e9a0f2968a05))
* **cli:** migrate from yargs to commander ([#1216](https://github.com/nwutils/nw-builder/issues/1216)) ([7ca5a28](https://github.com/nwutils/nw-builder/commit/7ca5a28f40078ab179aab72cf0f3260ef5f118f2))
* **deps:** bump actions/setup-node from 4.0.3 to 4.0.4 in /.github/workflows in the gha group ([#1232](https://github.com/nwutils/nw-builder/issues/1232)) ([8473fc6](https://github.com/nwutils/nw-builder/commit/8473fc63811fd08066b7801c019d00565918770b))
* **deps:** bump the npm group across 1 directory with 7 updates ([#1233](https://github.com/nwutils/nw-builder/issues/1233)) ([9efa2f4](https://github.com/nwutils/nw-builder/commit/9efa2f439e46aaadf55c79d9c3bd404cea1144aa))
* **deps:** bump vite from 5.3.5 to 5.4.6 ([#1231](https://github.com/nwutils/nw-builder/issues/1231)) ([6135682](https://github.com/nwutils/nw-builder/commit/6135682dc01f8a1dad12660957ddd637e6a20864))

## [4.10.0](https://github.com/nwutils/nw-builder/compare/v4.9.0...v4.10.0) (2024-08-24)


### Features

* **bld:** rename MacOS Helper apps ([#1206](https://github.com/nwutils/nw-builder/issues/1206)) ([9f3b30f](https://github.com/nwutils/nw-builder/commit/9f3b30f9e04c2d2d103f5ec19078c0a14fbf12f7))


### Chores

* **deps:** bump davelosert/vitest-coverage-report-action from 2.5.0 to 2.5.1 in /.github/workflows in the gha group ([#1210](https://github.com/nwutils/nw-builder/issues/1210)) ([6d69ae3](https://github.com/nwutils/nw-builder/commit/6d69ae36bc1edcf1867aa25e464e4a9b1aa28aa4))
* **deps:** bump the npm group across 1 directory with 3 updates ([#1212](https://github.com/nwutils/nw-builder/issues/1212)) ([20b7e81](https://github.com/nwutils/nw-builder/commit/20b7e8190f022bc8a50776176bdcc70d3bdcd08f))
* **get:** improve error message when comparing shasums ([#1213](https://github.com/nwutils/nw-builder/issues/1213)) ([b37068f](https://github.com/nwutils/nw-builder/commit/b37068f9228c1f00877d51c5fe607be7096b6564)), closes [#1209](https://github.com/nwutils/nw-builder/issues/1209)
* **test:** move tests to seperate dir ([#1205](https://github.com/nwutils/nw-builder/issues/1205)) ([da0e353](https://github.com/nwutils/nw-builder/commit/da0e353e805b8e4b249f298c74a352a114b2737d))
* **test:** rename fixtures dir ([c6193bb](https://github.com/nwutils/nw-builder/commit/c6193bb67fa32d750b42f9a8a7d44db507126519))

## [4.9.0](https://github.com/nwutils/nw-builder/compare/v4.8.1...v4.9.0) (2024-08-15)


### Features

* **get:** verify sha256 checksum ([#1201](https://github.com/nwutils/nw-builder/issues/1201)) ([810944d](https://github.com/nwutils/nw-builder/commit/810944da14ffc97d8fb2b5d78d7c8d09ad514226))


### Chores

* **deps:** bump the npm group across 1 directory with 4 updates ([#1199](https://github.com/nwutils/nw-builder/issues/1199)) ([b07d1fc](https://github.com/nwutils/nw-builder/commit/b07d1fc09d4fcc8282b04c369725594d120af12a))
* **deps:** bump volta-cli/action from 4.1.1 to 4.2.1 in /.github/workflows in the gha group across 1 directory ([#1189](https://github.com/nwutils/nw-builder/issues/1189)) ([282ea7a](https://github.com/nwutils/nw-builder/commit/282ea7ade9d93dbbf8d97c9c0770df0876c3fd8a))
* **deps:** remove license check logic ([9dde7b2](https://github.com/nwutils/nw-builder/commit/9dde7b2b36a1ccd0effb546a89584d2075e59a17))

## [4.8.1](https://github.com/nwutils/nw-builder/compare/v4.8.0...v4.8.1) (2024-08-05)


### Bug Fixes

* **bld:** maintain cwd when using managedManifest or nativeAddon ([#1187](https://github.com/nwutils/nw-builder/issues/1187)) ([40223db](https://github.com/nwutils/nw-builder/commit/40223db6af75651618df7f3099b99191faa11f24)), closes [#1186](https://github.com/nwutils/nw-builder/issues/1186)


### Chores

* **deps:** bump the npm group across 1 directory with 6 updates ([#1185](https://github.com/nwutils/nw-builder/issues/1185)) ([f4c0822](https://github.com/nwutils/nw-builder/commit/f4c08224c7651b3eecf2353a7a50fd7cf240c2f0))
* **deps:** remove unused cli-progress package ([8f4e07d](https://github.com/nwutils/nw-builder/commit/8f4e07dfbda348fcc832694d346be7616bfb1f4b))

## [4.8.0](https://github.com/nwutils/nw-builder/compare/v4.7.8...v4.8.0) (2024-07-27)


### Features

* **bld:** add languageCode option for Windows ([#1175](https://github.com/nwutils/nw-builder/issues/1175)) ([96ad585](https://github.com/nwutils/nw-builder/commit/96ad585ec170416d31248ccf3503191831e802b0))


### Bug Fixes

* **bld:** pass nw manifest correctly when managedManifest is true ([#1176](https://github.com/nwutils/nw-builder/issues/1176)) ([949c4b7](https://github.com/nwutils/nw-builder/commit/949c4b70b89cc96ee98d88b910caa833eb99d385))


### Chores

* **ci:** check for valid licenses ([#1150](https://github.com/nwutils/nw-builder/issues/1150)) ([ab99731](https://github.com/nwutils/nw-builder/commit/ab997311046b1e75aee24397a3b9bb20d19c4d2f))
* **deps:** bump actions/setup-node from 4.0.2 to 4.0.3 in /.github/workflows in the gha group ([#1151](https://github.com/nwutils/nw-builder/issues/1151)) ([7130930](https://github.com/nwutils/nw-builder/commit/7130930c3d7ce28c1e07c510045576830e266c77))
* **deps:** bump the npm group across 1 directory with 8 updates ([#1177](https://github.com/nwutils/nw-builder/issues/1177)) ([9410455](https://github.com/nwutils/nw-builder/commit/94104551d8b8f8c1ece595e34caa91b3c34dc0a3))
* **deps:** migrate from compressing to tar and archiver ([7c73903](https://github.com/nwutils/nw-builder/commit/7c73903d6c3723814df64d9241976b457cb2d149))
* **docs:** improve install/quick start ([a87f44b](https://github.com/nwutils/nw-builder/commit/a87f44b5f6e0bdc0e09569a560b10a032766da02))
* fsm -&gt; fs.promises ([08d79bf](https://github.com/nwutils/nw-builder/commit/08d79bf07c0b590a376af4cc53a37db4d75094cf))

## [4.7.8](https://github.com/nwutils/nw-builder/compare/v4.7.7...v4.7.8) (2024-07-02)


### Chores

* **ci:** add Vitest Coverage Action ([#1136](https://github.com/nwutils/nw-builder/issues/1136)) ([4d32845](https://github.com/nwutils/nw-builder/commit/4d32845877ee7a64b61e8226b5593f6c8137524a)), closes [#1041](https://github.com/nwutils/nw-builder/issues/1041)
* **deps-dev:** bump eslint-plugin-jsdoc from 48.2.13 to 48.4.0 in the npm group ([#1138](https://github.com/nwutils/nw-builder/issues/1138)) ([61189de](https://github.com/nwutils/nw-builder/commit/61189de946bf5bafd2acdd7b37b05e5a68e6b9a3))
* **deps-dev:** bump the npm group across 1 directory with 4 updates ([#1142](https://github.com/nwutils/nw-builder/issues/1142)) ([761963d](https://github.com/nwutils/nw-builder/commit/761963d60db32aa53fd585204ea83868164986ae))
* **deps:** bump davelosert/vitest-coverage-report-action from 2.4.0 to 2.5.0 in /.github/workflows in the gha group ([#1140](https://github.com/nwutils/nw-builder/issues/1140)) ([fddaf9f](https://github.com/nwutils/nw-builder/commit/fddaf9f1a2f53b8c9b8314b4043d5a0523be2e35))
* **test:** enable vitest json reporter ([e44aadb](https://github.com/nwutils/nw-builder/commit/e44aadb880b794b99516069d2c40473a72f18dc5))

## [4.7.7](https://github.com/nwutils/nw-builder/compare/v4.7.6...v4.7.7) (2024-06-22)


### Bug Fixes

* execute postinstall script iff in development mode ([#1132](https://github.com/nwutils/nw-builder/issues/1132)) ([3c68216](https://github.com/nwutils/nw-builder/commit/3c682167369248e96ed48ea06163169805fcedda))


### Chores

* **deps:** bump the npm group across 1 directory with 6 updates ([#1135](https://github.com/nwutils/nw-builder/issues/1135)) ([905478a](https://github.com/nwutils/nw-builder/commit/905478a0156a9047aa10f629cb53200ee6f90e65))

## [4.7.6](https://github.com/nwutils/nw-builder/compare/v4.7.5...v4.7.6) (2024-06-19)


### Bug Fixes

* **bld:** resolve undefined reference ([#1127](https://github.com/nwutils/nw-builder/issues/1127)) ([006b517](https://github.com/nwutils/nw-builder/commit/006b517be0420e08134b5670e5d62a91f8b9107c)), closes [#1125](https://github.com/nwutils/nw-builder/issues/1125)


### Chores

* **deps-dev:** bump @stylistic/eslint-plugin-js from 2.1.0 to 2.2.1 in the npm group ([#1123](https://github.com/nwutils/nw-builder/issues/1123)) ([fcd83a9](https://github.com/nwutils/nw-builder/commit/fcd83a9875068ed9e86870cb4bbdabcb86b74bef))
* **deps-dev:** bump ws from 8.17.0 to 8.17.1 ([#1126](https://github.com/nwutils/nw-builder/issues/1126)) ([7aa6f08](https://github.com/nwutils/nw-builder/commit/7aa6f08927869c8ceb5da686bb53e48f537f7a40))
* **deps:** bump actions/checkout from 4.1.6 to 4.1.7 in /.github/workflows in the gha group ([#1116](https://github.com/nwutils/nw-builder/issues/1116)) ([eefde68](https://github.com/nwutils/nw-builder/commit/eefde686e344ae3e51191caf66a5b6b0b1b736fe))
* **test:** enable e2e tests ([#1120](https://github.com/nwutils/nw-builder/issues/1120)) ([f802947](https://github.com/nwutils/nw-builder/commit/f80294712240caf8ccf225684eaec20ecb5f80a8))

## [4.7.5](https://github.com/nwutils/nw-builder/compare/v4.7.4...v4.7.5) (2024-06-11)


### Bug Fixes

* **run:** set stdio behaviour to inherit ([a3d181a](https://github.com/nwutils/nw-builder/commit/a3d181a5b9b6f967c11e7082fea57db96078bf7e))


### Chores

* **bld:** migrate from rcedit with resedit ([#1094](https://github.com/nwutils/nw-builder/issues/1094)) ([03a55b9](https://github.com/nwutils/nw-builder/commit/03a55b919a7e5dfcc1d9fa3f06baa327804d67c4))
* **deps:** bump actions/checkout from 4.1.5 to 4.1.6 in /.github/workflows in the gha group ([#1095](https://github.com/nwutils/nw-builder/issues/1095)) ([0f1b126](https://github.com/nwutils/nw-builder/commit/0f1b1260d3a36939c111313ec1ab121fe8f12955))
* **deps:** bump google-github-actions/release-please-action from 4.1.0 to 4.1.1 in /.github/workflows in the gha group ([#1091](https://github.com/nwutils/nw-builder/issues/1091)) ([316741b](https://github.com/nwutils/nw-builder/commit/316741ba699fcd0f8a7dd1176cbd14ca05c571be))
* **deps:** bump googleapis/release-please-action from 4.1.1 to 4.1.3 in /.github/workflows in the gha group ([#1114](https://github.com/nwutils/nw-builder/issues/1114)) ([e284f5b](https://github.com/nwutils/nw-builder/commit/e284f5b61c0df05b63388ea5d31311f5daacd858))
* **deps:** bump the npm group across 1 directory with 3 updates ([#1112](https://github.com/nwutils/nw-builder/issues/1112)) ([fde3491](https://github.com/nwutils/nw-builder/commit/fde34914d920245f535184ae545a56d939c59b8d))
* **deps:** bump the npm group across 1 directory with 6 updates ([#1105](https://github.com/nwutils/nw-builder/issues/1105)) ([eb63ded](https://github.com/nwutils/nw-builder/commit/eb63dedabbf2ae525fa9f1ab6aa57d9b11c63fe0))
* **deps:** upgrade to eslint v9 ([ffe6dd0](https://github.com/nwutils/nw-builder/commit/ffe6dd0238a8401fab46beed06c2812b0fa89abd))
* **docs:** add missing platform-specific app options info ([#1093](https://github.com/nwutils/nw-builder/issues/1093)) ([715097f](https://github.com/nwutils/nw-builder/commit/715097f53dfe69e7895634fd85e4043b6a3242e1))

## [4.7.4](https://github.com/nwutils/nw-builder/compare/v4.7.3...v4.7.4) (2024-05-12)


### Bug Fixes

* **cli:** add missing options managedManifest and nodeAddon ([#1084](https://github.com/nwutils/nw-builder/issues/1084)) ([f6ced81](https://github.com/nwutils/nw-builder/commit/f6ced81d1e9b2b862fd916fcb7432a0d53881039))


### Chores

* **deps:** bump the npm group with 4 updates ([#1082](https://github.com/nwutils/nw-builder/issues/1082)) ([26cbf88](https://github.com/nwutils/nw-builder/commit/26cbf881cc7460f088ad9b5fdd84d10b5c7589ab))

## [4.7.3](https://github.com/nwutils/nw-builder/compare/v4.7.2...v4.7.3) (2024-05-09)


### Bug Fixes

* **cli:** disallow unknown options ([#1079](https://github.com/nwutils/nw-builder/issues/1079)) ([5d54d8c](https://github.com/nwutils/nw-builder/commit/5d54d8c20927c5dfabacc128d1cee036a7cf6fb5))

## [4.7.2](https://github.com/nwutils/nw-builder/compare/v4.7.1...v4.7.2) (2024-05-09)


### Bug Fixes

* **get:** close file after reading all entries ([#1077](https://github.com/nwutils/nw-builder/issues/1077)) ([a6b090f](https://github.com/nwutils/nw-builder/commit/a6b090fd3ebeb4ed4d45d04c711d00eddf79dc9e))


### Chores

* **ci:** correct config hopefully ([0bad4d2](https://github.com/nwutils/nw-builder/commit/0bad4d2893389a76f7292bfaffaa77cdb8094571))
* **deps:** bump the gha group in /.github/workflows with 2 updates ([#1074](https://github.com/nwutils/nw-builder/issues/1074)) ([fd8a633](https://github.com/nwutils/nw-builder/commit/fd8a6335a26a01f187171e607f289485b0d4865f))
* **deps:** bump the npm group across 1 directory with 11 updates ([#1078](https://github.com/nwutils/nw-builder/issues/1078)) ([7158c7b](https://github.com/nwutils/nw-builder/commit/7158c7b8881d333995d1cda32812776500d7d96b))
* **deps:** bump vite from 5.1.6 to 5.2.8 ([#1060](https://github.com/nwutils/nw-builder/issues/1060)) ([c52dbb6](https://github.com/nwutils/nw-builder/commit/c52dbb690f46d8929dbd9ba553eb9967b7683988))
* **docs:** update contributing guidelines ([efdbdca](https://github.com/nwutils/nw-builder/commit/efdbdca0f73a91129dc279d2f7346084f8a0cefe))

## [4.7.1](https://github.com/nwutils/nw-builder/compare/v4.7.0...v4.7.1) (2024-03-30)


### Bug Fixes

* **get:** missing import ([bd2273a](https://github.com/nwutils/nw-builder/commit/bd2273a84199de3b804e96c92da88e66aa7fce32))


### Chores

* **deps:** reconfigure dependabot ([698ecd5](https://github.com/nwutils/nw-builder/commit/698ecd5817a9f4ee7e17271410ebce78157644fa))

## [4.7.0](https://github.com/nwutils/nw-builder/compare/v4.6.4...v4.7.0) (2024-03-26)


### Features

* **get:** support `file://` for `options.downloadUrl` ([094567c](https://github.com/nwutils/nw-builder/commit/094567c1192c66465fb8ed43d6e5b6f0ed7cfdec))


### Chores

* **deps:** bump follow-redirects from 1.15.5 to 1.15.6 ([#1052](https://github.com/nwutils/nw-builder/issues/1052)) ([8258de9](https://github.com/nwutils/nw-builder/commit/8258de9773fe5b9e497abbb9cea6978329ee6707))
* **deps:** bump the gha group in /.github/workflows with 1 update ([#1054](https://github.com/nwutils/nw-builder/issues/1054)) ([1935800](https://github.com/nwutils/nw-builder/commit/1935800ce560ad5c59cf422276916e3960a60a0d))
* **deps:** bump the gha group in /.github/workflows with 2 updates ([#1051](https://github.com/nwutils/nw-builder/issues/1051)) ([0362403](https://github.com/nwutils/nw-builder/commit/0362403b9501465258b974caefe623eebfb640f1))
* **deps:** bump the npm group with 1 update ([#1055](https://github.com/nwutils/nw-builder/issues/1055)) ([5a7bc71](https://github.com/nwutils/nw-builder/commit/5a7bc718a82b0907b89035412fda25cef54f32f6))
* **deps:** bump the npm group with 3 updates ([#1050](https://github.com/nwutils/nw-builder/issues/1050)) ([a70aabc](https://github.com/nwutils/nw-builder/commit/a70aabc14b5614a32d4fbfa995e35af123cef65f))
* **deps:** bump the npm group with 8 updates ([#1048](https://github.com/nwutils/nw-builder/issues/1048)) ([0ca3c34](https://github.com/nwutils/nw-builder/commit/0ca3c341f312b584b37628a9d3726eca2b4584be))
* **get:** deprecate get mode ([#1053](https://github.com/nwutils/nw-builder/issues/1053)) ([386fc18](https://github.com/nwutils/nw-builder/commit/386fc18efc4779438591cbc3ab39c72f65473215))

## [4.6.4](https://github.com/nwutils/nw-builder/compare/v4.6.3...v4.6.4) (2024-02-24)


### Bug Fixes

* **get:** copy ffmpeg to correct location on windows ([#1044](https://github.com/nwutils/nw-builder/issues/1044)) ([71fa4ab](https://github.com/nwutils/nw-builder/commit/71fa4ab471c77b2853dd822e4ea5e97cbd9daeb9))

## [4.6.3](https://github.com/nwutils/nw-builder/compare/v4.6.2...v4.6.3) (2024-02-22)


### Bug Fixes

* **get:** correct ffmpeg path ([#1042](https://github.com/nwutils/nw-builder/issues/1042)) ([391a6e1](https://github.com/nwutils/nw-builder/commit/391a6e1a715407ba45ea4b12dda812caea709535))


### Chores

* **docs:** update contributing guidelines ([ca594df](https://github.com/nwutils/nw-builder/commit/ca594df7beaa49a95d2fa33c14ebcc120a0b6d3c))

## [4.6.2](https://github.com/nwutils/nw-builder/compare/v4.6.1...v4.6.2) (2024-02-22)


### Bug Fixes

* **get:** ffmpeg and symlinks ([d5c1bf5](https://github.com/nwutils/nw-builder/commit/d5c1bf53cc66afdf79c3f9653ff6b9e77a7de4b6))


### Chores

* **deps:** bump ip from 2.0.0 to 2.0.1 ([2284d52](https://github.com/nwutils/nw-builder/commit/2284d52ba0c4d1bb9a86a91e138ba99ce2af8d6c))

## [4.6.1](https://github.com/nwutils/nw-builder/compare/v4.6.0...v4.6.1) (2024-02-15)


### Chores

* **ci:** add chores section to changelog ([#1028](https://github.com/nwutils/nw-builder/issues/1028)) ([d630720](https://github.com/nwutils/nw-builder/commit/d630720039ba81563aa0e00995aa004c8d5edc79))
* **ci:** fixup release please action ([#1032](https://github.com/nwutils/nw-builder/issues/1032)) ([f9ae7cd](https://github.com/nwutils/nw-builder/commit/f9ae7cd170bba17849ff66ac4612df9d3a0716de))
* **ci:** remove `schema` prop ([33238b1](https://github.com/nwutils/nw-builder/commit/33238b14fb1bff16bd351826bd2d891c7e6d136c))
* **deps:** bump the gha group in /.github/workflows with 1 update ([70030df](https://github.com/nwutils/nw-builder/commit/70030df94d55e5563775df16b7f07b2537198f69))
* **docs:** update PR template to simplify commit descriptions ([#1029](https://github.com/nwutils/nw-builder/issues/1029)) ([6da9b89](https://github.com/nwutils/nw-builder/commit/6da9b898f74309dde6ca120dddbeaa32e7bdbcfc))
* **docs:** update readme and changelog ([63fd50b](https://github.com/nwutils/nw-builder/commit/63fd50bdbfed52de4be4332601944e058b11d793))
* fix remaining lint errors ([334ae74](https://github.com/nwutils/nw-builder/commit/334ae744d2d1d56d973145e407a987107675eb04))
* **get:** refactor implementation ([#1025](https://github.com/nwutils/nw-builder/issues/1025)) ([72f65e1](https://github.com/nwutils/nw-builder/commit/72f65e134b3f5dfd543aba9d292c016da8b6d7f3))
* **get:** refactor unzip symlink implementation ([#1030](https://github.com/nwutils/nw-builder/issues/1030)) ([69661c3](https://github.com/nwutils/nw-builder/commit/69661c301278f2f4071f41fa71e909733698c680))
* **get:** simplify symlink logic ([#1035](https://github.com/nwutils/nw-builder/issues/1035)) ([4f64307](https://github.com/nwutils/nw-builder/commit/4f643077fb259fb1374e41c88abc801486f8467c)), closes [#1030](https://github.com/nwutils/nw-builder/issues/1030)
* **release-please-action:** do not point to manifest file ([96eeec8](https://github.com/nwutils/nw-builder/commit/96eeec806e1aba0b62acd899d5b9e98070a32b64))
* **release-please-action:** point to config and manifest ([0a6a44d](https://github.com/nwutils/nw-builder/commit/0a6a44db44ae19c246221f7f05450f6ef1e9f646))
* **release-please:** correct path to package ([3719cee](https://github.com/nwutils/nw-builder/commit/3719cee4571b46b6b4c2c4d2b6806864e3c90c16))
* **release-please:** remove manifest ([23a16fb](https://github.com/nwutils/nw-builder/commit/23a16fbd5e93c3ad1221dad6106299079f81ea7c))
* **run:** mark run mode as deprecated ([#1027](https://github.com/nwutils/nw-builder/issues/1027)) ([1115728](https://github.com/nwutils/nw-builder/commit/1115728d433cba123a7e2dd54a52abaaed4710a6))
* **test:** try adding chores to release notes ([#1031](https://github.com/nwutils/nw-builder/issues/1031)) ([5cabc20](https://github.com/nwutils/nw-builder/commit/5cabc20e79bb0fe0d77687f97ac4fae8fc3e95a9))

## [4.6.0](https://github.com/nwutils/nw-builder/compare/v4.5.4...v4.6.0) (2024-02-01)


### Features

* **get:** set `cacheDir` on another volume ([#1023](https://github.com/nwutils/nw-builder/issues/1023)) ([7c0f711](https://github.com/nwutils/nw-builder/commit/7c0f711d407c4f992e7897e9d590f03d3105db4e)), closes [#1017](https://github.com/nwutils/nw-builder/issues/1017)

## [Unreleased]

## [4.5.4] - 2024-01-23

### Changed

- Migrate from `unzipper` to `yauzl-promise` to prevent corrupting files. 

## [4.5.3] - 2023-12-20

### Changed

- Wrap `unzipper` call inside Promise to prevent race condition.

## [4.5.2] - 2023-12-19

### Changed

- Fix `yargs/helpers` import for cli usage.

## [4.5.1] - 2023-12-19

### Changed

- Manually create symbolic links for MacOS builds.

## [4.5.0] - 2023-12-18

## Added

- Use `unzipper` to decompress ZIP files.

## Changed

- Use `tar` to extract tarballs.
- Disable `options.nativeAddon`.

### Removed

- Remove `yauzl-promise` since it does not preserve symlinks on MacOS.

## [4.4.2-beta.4] - 2023-11-03

### Changed

- Use `yauzl-promise` to decompress MacOS build on MacOS platform.

### Removed

- Native package `unzip` usage.

## [4.4.2-beta.3] - 2023-10-23

### Added

- Align cache implementation with `nwjs/npm-installer`
- `nw` module can [use the `options.cacheDir`](https://github.com/nwjs/npm-installer#retrieve-binaries-from-custom-download-location-or-file-path) to get cached NW.js binaries.

## [4.4.2-beta.2] - 2023-10-20

### Added

- Node Native Addon support using GYP. To enable, set `options.nativeAddon` to `gyp`.

## [4.4.2-beta.1] - 2023-10-16

### Added

- Managed Manifest mode. `options.ManagedManifest` defaults to `false`.
- If `true`, then first `package.json` globbed is parsed as manifest.
- If JSON type, object is parsed as manifest.
- If string type, then resolve as file path to manifest.

## [4.4.2] - 2023-10-16

### Changed

- Fix FFmpeg decompression.
- Auto generate docs from JSDoc comments.
- Improve TypeScript type definitions.
- Fix get mode.
- Refactor build mode.
- Generate markdown docs from JSDocs.

## [4.4.1] - 2023-09-06

### Changed

- Improve debug logging.
- Fixed handling of argv.

## [4.4.0] - 2023-09-05

### Added

- Cache community FFmpeg.
- Move FFmpeg decompress function to relevant location

## [4.3.11] - 2023-09-05

### Changed

- Separate download logic for NW.js and FFmpeg.

## [4.3.10] - 2023-08-21

### Removed

- Do not copy the first `package.json` encountered to the root of `options.outDir` when `options.glob` is enabled. This may seem like a breaking change but it is actually reverting incorrect behaviour.

## [4.3.9] - 2023-08-15

### Changed

- Some mac environments don't restore symlinks when using compressing lib. Now we will use system `unzip` command to extract zip files

## [4.3.8] - 2023-08-14

### Changed

- Handle error during ffmpeg copy on some mac environments

## [4.3.7] - 2023-08-11

### Changed

- Move community `ffmpeg` in the correct folder.

## [4.3.6] - 2023-08-11

### Changed

- Move community `ffmpeg` in the correct folder.

## [4.3.5] - 2023-08-03

### Changed

- Return promise in get mode to await it correctly.

## [4.3.4] - 2023-08-02

### Changed

- Conditonally set Icon for Windows build.
- Refactor `get` mode into a single file.

## [4.3.3] - 2023-07-25

### Changed

- Set `NSHumanReadableCopyright` property in `*.app/Resources/en.lproj/InfoPlist.strings` to update copyright

### Removed

- `NSHumanReadableCopyright` from `Info.plist`

## [4.3.2] - 2023-07-11

### Added

- Descriptions and argument types for remaining cli arguments.

## [4.3.1] - 2023-07-07

### Changed

- Replace the icon at `nwjs.app/Contents/Resources/app.icns` with the icon at `options.app.icon` file path.

### Removed

- `xattr` package. The `com.apple.quarantine` flag should be handled by the developer.

## [4.3.0] - 2023-07-03

### Added

- Compress `outDir` to `zip`, `tar` and `tgz` formats.
- Specify log level via `options.logLevel`.
- Add platform, arch, Node and NW.js info in debug log.
- Add MacOS name, version, description and legal metadata
- Removed redundant `options.app.icon` property (Refer to NW.js docs on how to set icon)

## [4.2.8] - 2023-06-29

### Changed

- Refactor `zip` implementation. Use `compressing` instead of `archiver` package.
- If `zip` is `true` or `"zip"`, then remove outDir after compression. (This was supposed to be the intented behavior all along).

## [4.2.7] - 2023-06-27

### Changed

- Redownload `manifest.json` every time the `nwbuild` function is executed.
- If `manifest.json` already exists and we are unable to connect to the `nwjs.io` domain, then use the existing manifest.
- If no `manifest.json` exists in the cache dir, then the `validate` function will cache this and throw an error - preventing the build.

## [4.2.6] - 2023-06-20

### Changed

- Preserve relative symbolic links of NW.js files during build mode

## [4.2.5] - 2023-06-20

### Changed

- Rename executable using `options.app.name` value.

## [4.2.4] - 2023-06-18

### Changed

- Migrate from `decompress` to `compressing`

## [4.2.3-beta.2] - 2023-06-16

### Changed

- Preserve relative symbolic links during build mode

## [4.2.3-beta.1] - 2023-06-15

### Changed

- Do not resolve `options.srcDir` when parsing `options` object.

## [4.2.3] - 2023-04-19

### Changed

- Fix module imports which broke in [04ccd51](https://github.com/nwutils/nw-builder/commit/04ccd514f264f5590e5f86c42288904fe027901f)

## [4.2.2] - 2023-04-14

### Added

- Validation for `options.version`.
- Type definition file for `nwbuild` function.

## [4.2.1] - 2023-03-28

### Changed

- Set `files` to `options.srcDir` if glob disabled preventing a `package.json` not found error.

## [4.2.0] - 2023-03-27

## Added

- Glob flag defaulting to true. Currently file globbing is broken and it is recommended to set `glob` to false.

### Changed

- Fixed `get` mode
- Fixed `run` mode
- Fixed `build` mode
- Updated `get` mode docs

## [4.1.1-beta.2] - 2023-03-15

### Changed

- Parse the first `package.json` file and treat it as the NW.js manifest. Copy it to `outDir/package.nw/package.json` for Linux and Windows and `outDir/nwjs.app/Contents/Resources/app.nw/package.json` for MacOS.

To simplify your workflow, you can pass the path to the `package.json` first:

```shell
nwbuild ./path/to/package.json ./app/**/* ./node_modules/**/*
```

Make sure your manifest file's `main` property points to a valid file path. In this case it might be:

```json
{
  "main": "app/index.html"
}
```

## [4.1.1-beta.1] - 2023-03-14

### Added

- `get` mode to only download NW.js binaries. Example use case: download during Node's `postinstall` hook:

```json
{
  "scripts": {
    "postinstall": "nwbuild --mode=get --flavor=sdk"
  }
}
```

- Check if NW.js's Node version matches host's Node version

## Changed

- Fix undefined import for Windows configuration

## [4.1.1-beta.0] - 2023-03-12

### Changed

- Remove false test for run mode.

## [4.1.1] - 2023-03-12

### Changed

- Glob file and directory differently.
- MacOS ARM build is no longer behind `beta` version.

## [4.1.0-beta.3] - 2023-03-01

### Added

- Allow list `https://npmmirror.com/mirrors/nwjs/` and `https://npm.taobao.org/mirrors/nwjs/` mirrors.

## [4.1.0-beta.2] - 2023-02-29

### Changed

- Do not convert srcDir files to absolute paths.
- Copy files to correct location.

## [4.1.0-beta.1] - 2023-02-28

### Changed

- Resolve path iff file path type is valid.

## [4.1.0-beta.0] - 2023-02-25

### Added

- MacOS ARM support

## [4.1.0] - 2023-02-23

## Added

- Use (community) prebuilt version of `ffmpeg` if the `ffmpeg` flag is `true` (defaults to `false`).

### Changed

- `await` platform specific config steps

## [4.0.11] - 2023-02-5

### Changed

- Security update `http-cache-semantics` to `v4.1.1`.

## [4.0.10] - 2023-02-05

### Added

- `options.cli` flag to prevent `node-glob` from globbing already globbed files and erroring out with a `package.json not found in srcDir file glob patterns` message.

### Changed

- Copy subdirectories of `options.srDir` in the correct location.

## [4.0.9] - 2023-02-03

### Added

- Run and build demo app in CI.

### Changed

- Fixed false positives in CI
- Throw errors instead of returning them
- Reject error object instead of exit code

## [4.0.8] - 2023-01-15

### Added

- Flag to check if specific `nw` release is cached. [#772](https://github.com/nwutils/nw-builder/pull/772)

### Changed

- Create `cacheDir`, `outDir` before getting release info. [#772](https://github.com/nwutils/nw-builder/pull/772)

## [4.0.7] - 2023-01-14

### Changed

- Do not throw error if `nwbuild` is of `object` type. [#769](https://github.com/nwutils/nw-builder/pull/769)

- Fix `package.json` path for `updateNotifier`. [#767](https://github.com/nwutils/nw-builder/pull/767)

## [4.0.6] - 2023-01-09

### Added

- Warn about loss of permissions if building Linux or MacOS on Windows. [8793d4b](https://github.com/nwutils/nw-builder/commit/8793d4bf06288199fcaff340fda43c1e2fbcacbc)

### Changed

- Fix error when `options.version` is `latest`. [33ef184](https://github.com/nwutils/nw-builder/commit/33ef184467f78fed94541e876da042b4ed99d443)

### Removed

- CJS support [968f798](https://github.com/nwutils/nw-builder/commit/968f7980de59fea72ddac8e1d64628e561de1f9a)

## [4.0.5] - 2023-01-06

### Changed

- Prevent duplicate globbing of `srcDir` files. [07901c9](https://github.com/nwutils/nw-builder/commit/07901c9e3930481ead0977b9be731765df28c087)

## [4.0.4] - 2023-01-06

### Changed

- Convert `srcDir` type from `string[]` to `string`. [1a699af](https://github.com/nwutils/nw-builder/commit/1a699af300782e0847333bb7ad945dbde8940350)

## [4.0.3] - 2023-01-06

### Added

- File globing. [#749](https://github.com/nwutils/nw-builder/pull/749)

- Linux and Windows configuration options. [#729](https://github.com/nwutils/nw-builder/pull/729)

### Changed

- Skip modification of Windows executable if platform is not Windows or Wine is not installed. [#739](https://github.com/nwutils/nw-builder/pull/739)

- Run mode should only require `srcDir`, `version` and `flavor`. [#718](https://github.com/nwutils/nw-builder/pull/718)

## [4.0.2] - 2022-11-30

### Added

- Allow user to rename NW executable. [#712](https://github.com/nwutils/nw-builder/pull/712)

### Changed

- Fix MacOS build. [#717](https://github.com/nwutils/nw-builder/pull/717)

- CJS support via `esbuild`. [#713](https://github.com/nwutils/nw-builder/pull/713)

## [4.0.1] - 2022-11-20

### Added

- Support for Desktop Entry file. [#690](https://github.com/nwutils/nw-builder/pull/690)

### Changed

- Resolve promise in `close` event with respect to compression. [#698](https://github.com/nwutils/nw-builder/pull/698)

- Check for release info after downloading NW binaries in `cacheDir`. [#697](https://github.com/nwutils/nw-builder/pull/697)

## [4.0.0] - 2022-11-16

### Added

- Rename Helper apps. [#687](https://github.com/nwutils/nw-builder/pull/687)

- MacOS support. [#685](https://github.com/nwutils/nw-builder/pull/685)

- Check for `nwbuild` object in `package.json`. [#684](https://github.com/nwutils/nw-builder/pull/684)

## [3.8.6] - 2022-09-22

- Fix mac and windows build

## [3.8.5] - 2022-09-20

### Added

- `nwbuild` function which accidently got removed.

### Changed

- Update usage docs for `nwbuild`

## [3.8.4] - 2022-09-20

### Changed

- Refactor download function

## [3.8.3-beta.1]

### Changed

- Check for first instance of `package.json`

## [3.8.3] - 2022-08-26

### Changed

- `platforms` argument also accepts comma separated (without spaces) values

## [3.8.2] - 2022-08-08

### Added

- Support for multiple file paths

## [3.8.1] - 2022-07-18

### Changed

- Fix regex to match `package.json` _files_ only

## [3.8.0] - 2022-07-11

## Added

- `mode` option which defaults to run
- `nwbuild` function
- `quiet` option to documentation

## Changed

- CLI options by matching them to the API

## [3.7.4] - 2022-06-06

## Removed

- Remove `Version` from `CFBundleShortVersionString` [#576](https://github.com/nwjs-community/nw-builder/pull/576)

## [3.7.2] - 2022-06-02

## Added

- Added options `buildType`, `macCredits`, `macPlist`, `zip`, `zipOptions` to CLI [#575](https://github.com/nwjs-community/nw-builder/pull/575)

## Changed

- Update lint command [#575](https://github.com/nwjs-community/nw-builder/pull/575)

## [3.7.1] - 2022-06-02

## Changed

- Add `EditorConfig` [#574](https://github.com/nwjs-community/nw-builder/pull/574)
- Fix build step for Windows x64 platform [#572](https://github.com/nwjs-community/nw-builder/pull/572)
- Refactor `platforms` object [#571](https://github.com/nwjs-community/nw-builder/pull/571)

## [3.7.0] - 2022-05-30

## Added

- Optional zip file merging for Windows and Linux [#567](https://github.com/nwjs-community/nw-builder/pull/567)
- Add code of conduct [#560](https://github.com/nwjs-community/nw-builder/pull/560)

## Changed

- Update contributing guide [#569](https://github.com/nwjs-community/nw-builder/pull/569)
- Switch from TypeScript to JSDocs [#568](https://github.com/nwjs-community/nw-builder/pull/568)
- Set window icon with `rcedit` [#566](https://github.com/nwjs-community/nw-builder/pull/566)
- Refactor `checkCache` [#565](https://github.com/nwjs-community/nw-builder/pull/565)
- Simplify demo
- Refactor `detectCurrentPlatform` [#564](https://github.com/nwjs-community/nw-builder/pull/564)
- Update dependencies [#561](https://github.com/nwjs-community/nw-builder/pull/561) [#532](https://github.com/nwjs-community/nw-builder/pull/532)

## Removed

## [3.6.0] - 2022-05-18

### Added

- GitHub Actions for CICD [#552](https://github.com/nwjs-community/nw-builder/pull/552)
- Support multiple locales on OSX [#389](https://github.com/nwjs-community/nw-builder/pull/389)
- Pull request and issue template [#553](https://github.com/nwjs-community/nw-builder/pull/553)

### Changed

- Dependencies [#550](https://github.com/nwjs-community/nw-builder/pull/550)
- Documentation [#540](https://github.com/nwjs-community/nw-builder/pull/540) [#553](https://github.com/nwjs-community/nw-builder/pull/553) [#555](https://github.com/nwjs-community/nw-builder/pull/555)
- Improve run mode by detecting current platform to prevent downloading additional binaries

### Removed

- Travis
- AppVeyor
- JSHint
- EditorConfig

## [3.5.7]

### Security

- Source platform overrides module into the project instead of it being an extenal dependency. This helped us get rid of a vulnerable lodash version. See https://github.com/nwjs-community/nw-builder/issues/500

## [3.5.1] - 2017-10-19

### Added

- Add option.winVersionString for accurate process name. See https://github.com/nwjs-community/nw-builder/pull/459.

### Fixed

- Small platform overrides fix. See https://github.com/nwjs-community/nw-builder/pull/477/files.

## [3.4.1] - 2017-06-05

### Removed

- The `bluebird` dependency. We're now using native promises instead.

## [3.4.0] - 2017-05-28

### Added

- If using the package programmatically and it's out of date, a message will be shown (this was always the case for the CLI).
- There is now a README in every directory (with at least a single sentence summarizing the directory) to help with onboarding contributors.

### Changed

- Some dependencies are updated.

### Removed

- `osx32` is removed from the default list of platforms. Thanks to [@preaction](https://github.compreaction) (PR [#439](https://github.com/nwjs-community/nw-builder/pull/439)).
- An unnecessary `rcedit` dependency is removed.

### Fixed

- For Node 7+ users, you won't see a `os.tmpDir` deprecation warning anymore.

---

## Old format

- 2017-05-22 `3.2.3` Fix for caching when a version is specified (thanks @piwonesien for the help).
- 2017-05-20 `3.2.2` Fix: when using the `nwbuild` in run mode, the `-p` option was ignored and the current platform was always used.
- 2017-05-16 `3.2.1` Fix: NW.js 0.22.0+ apps didn't open.
- 2017-02-12 `3.2.0` Defaults to HTTPS now, added `manifestUrl` option, and bumped some dependencies.
- 2016-10-09 `3.1.2` Fix for passing array as files option when running app (plus some security fixes).
- 2016-10-09 `3.1.1` Fix for flavor feature when using CLI.
- 2016-09-14 `3.1.0` Ability to select any flavor of NW.js, not just `sdk`.
- 2016-08-28 `3.0.0` bumping graceful-fs-extra dependency to 2.0.0.
- 2016-08-14 `2.2.7` fix for macIcns option when using NW.js 0.12.3
- 2016-07-31 `2.2.6` fix for OS X caching
- 2016-07-03 `2.2.5` fix for update-notifier usage in bin
- 2016-07-03 `2.2.4` fix for syntax error in CLI
- 2016-07-02 `2.2.3` a few small fixes for the run option and more
- 2016-07-02 `2.2.2` fix for cache check of some legacy versions
- 2016-07-02 `2.2.1` supports newer NW.js versions (via http://nwjs.io/versions.json), plus other fixes.
- 2015-12-18 `2.2.0` added `zip` option.
- 2015-12-06 `2.1.0` added `cacheDir` command-line option, fix for no info being passed back, etc.
- 2015-06-28 `2.0.2` put upper bound to semver check for windows.
- 2015-06-14 `2.0.1` safer validation of versions.
- 2015-06-14 `2.0.0` changed to nw-builder, etc.
- 2015-05-05 `1.0.12` when using latest NW.js version, it's first validated that it's not an alpha version (fixes [#222](https://github.com/nwjs/nw-builder/issues/222)). Plus a fix for the `winIco` & `macIcns` command line options
- 2015-01-29 `1.0.8` fixed EMFILE errors (see [#147](https://github.com/nwjs/nw-builder/issues/147) [#148](https://github.com/nwjs/nw-builder/pull/148))
- 2015-01-21 `1.0.7` fixed about screen when copyright is not supplied
- 2015-01-15 `1.0.6` fixed downloads for nw.js version 0.12.0-alpha1
- 2015-01-15 `1.0.5` fixed downloads for NW.js versions < 0.12.0-alpha
- 2014-12-12 `1.0.0` 64-bit support, improved platform-overrides and no more EMFILE errors.
- 2014-12-07 `0.4.0` macPlist CFBundleIdentifier is generated from `package.json` (see [#131](https://github.com/nwjs/nw-builder/pull/131))
- 2014-11-14 `0.3.0` macPlist option improvements (see [#96](https://github.com/nwjs/nw-builder/pull/96))
- 2014-10-30 `0.2.0` adds support for platform-specific manifest overrides (see [#94](https://github.com/nwjs/nw-builder/pull/94))
- 2014-08-19 `0.1.2` adds a progress bar to downloads, fixes downloading through a proxy, fixed winIco, bug fixes
- 2014-08-01 `0.1.0` use app filename for generated executables, optimized version checking, (known issue: `winIco` on windows)
- 2014-07-31 `0.0.4` fixed compatibility with nodewebkit 0.10.0
- 2014-04-20 Added run option, bug fixes
- 2014-04-13 Preview Release
