// キャッシュファイルの指定
var CACHE_NAME = 'v1';
var urlsToCache = [
	'/index.html/',
	'/style.css',
    '/js/anime.min.js',
    '/assets/scence_1.mp4',
    '/assets/scence_2.mp4',
    '/assets/scence_3.mp4',
    '/assets/scence_4.mp4',
    '/assets/thumb-video1.mp4',
    '/assets/thumb-video2.mp4',
    '/assets/thumb-video3.mp4',
    '/assets/thumb-video4.mp4',
	'/assets/x-button.png',
	'/assets/bg.png',
    '/assets/logo.png',
    '/assets/text1.png',
    '/assets/text2.png',
	'/assets/text3.png',
	'/assets/text4.png'
];

// インストール処理
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function (event) {
});