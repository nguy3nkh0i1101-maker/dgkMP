// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Nút quay lại từ trình phát về trang chủ
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Các phần tử cho trang chi tiết bài hát (sẽ không được sử dụng trực tiếp khi nhấp vào bài hát, nhưng vẫn được tải)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Nút phát ở trang chi tiết

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini
const playerRatingSlider = document.getElementById('playerRatingSlider');
const currentRatingDisplay = document.getElementById('currentRatingDisplay');
const themeToggleBtn = document.getElementById('themeToggleBtn');

// App State
let songs = [
    {
        id: 1,
        title: "Đường Một Chiều",
        artist: "Haozi x Denver Remix",
        album: "Beauty in Death",
        albumArtUrl: "img/OIP.webp",
        audioSrc: "audio/Đường Một Chiều - Haozi X Denver remix (mp3cut.net).mp3",
        videoBgSrc: "videos/ĐƯỜNG MỘT CHIỀU ( HAOZI & DENVER REMIX ) NHẠC HOT TIKTOK.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0, text: "~" },
            { time: 30, text: "Em ơi có biết điều gì thật đau" },
            { time: 37, text: "Trong cuộc sống muôn màu" },
            { time: 40, text: "Để anh nói cho em nghe nhé" },
            { time: 47, text: "Rằng nơi anh đã từ lâu" },
            { time: 52, text: "Có cảm xúc lạ" },
            { time: 56, text: "Mỗi khi em kề bên, được nghe nói cười" },
            { time: 63, text: "Mình đã biết nhau từ lâu" },
            { time: 67, text: "Nên anh chẳng nói ra hết những lời này" },
            { time: 72, text: "Sợ em đi mất" },
            { time: 78, text: "Lặng im thấy em cùng ai" },
            { time: 82, text: "Dần khoảng cách với anh bao ngày" },
            { time: 87, text: "Em đâu nào hay" },
            { time: 91, text: "Lòng anh đau nhói" },
            { time: 93, text: "Trong góc tối khi nhìn em với anh ta trao nụ hôn đầu" },
            { time: 102, text: "Anh ước gì em thấy anh khóc" },
            { time: 106, text: "Vì anh cố chấp, nên cố gắng theo tình yêu ấy" },
            { time: 113, text: "Nên hôm nay anh đành chấp nhận, rời xa kỉ niệm" },
            { time: 120, text: "Anh mong em sẽ luôn vui" },
            { time: 125, text: "~" },
            { time: 157, text: "Nay" },
            { time: 159, text: "Anh nói ra hết lời yêu anh giữ trong lòng" },
            { time: 164, text: "Chẳng phải để níu tay người" },
            { time: 168, text: "Chỉ để giải thoát cho  anh một trái tim đầy cô đơn" },
            { time: 174, text: "Đường yêu anh không phải đường hai chiều" },
            { time: 178, text: "Oh—oh" },
            { time: 180, text: "Chỉ là đường thẳng rất dài" },
            { time: 184, text: "Anh không thể quay trở lại" },
            { time: 187, text: "Lòng anh đau nhói" },
            { time: 190, text: "Trong góc tối khi nhìn em với anh ta trao nụ hôn đầu" },
            { time: 198, text: "Anh ước gì em thấy anh khóc" },
            { time: 202, text: "Vì anh cố chấp, nên cố gắng theo tình yêu ấy" },
            { time: 209, text: "Nên hôm nay anh đành chấp nhận, rời xa kỉ niệm" },
            { time: 217, text: "Anh mong em sẽ luôn vui" },
            { time: 221, text: "~" },
        ]
    },
    {
        id: 2,
        title: "Trở Về",
        artist: "Wxrdie",
        album: "÷ (Divide)",
        albumArtUrl: "img/wxrdie.webp",
        audioSrc: "audio/Trở Về (mp3cut.net).mp3",
        videoBgSrc: "videos/Wxrdie - TRỞ VỀ (ft. JustaTee) [prod. by Phongkhin] _ OFFICIAL MV (online-video-cutter.com).mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0, text: "~" },
            { time: 21, text: "Con đã lớn lên ở trên nôi, ở trên nôi mẹ" },
            { time: 24, text: "Nghe tiếng hát ru ca ối-a" },
            { time: 27, text: "Con đã lớn lên nơi mưa giông, nơi mưa giông" },
            { time: 29, text: "Đủ biết từng điều mẹ đã mãi cho đi" },
            { time: 32, text: "Mẹ uống nước lã, uống nước lã để phần con thịt cá" },
            { time: 36.5, text: "Càng đi để tự mình thấy nhỏ bé với những thứ mẹ đã trải qua" },
            { time: 40, text: "Và giấu đi chỉ để đổi lấy lời nói dối con nghe" },
            { time: 42.5, text: "Có những lúc phải đi xa nhưng mà con chỉ muốn được trở về" },
            { time: 45, text: "Có những lúc nghĩ sẽ buông xuôi nhưng mà con lại nhớ về bố mẹ" },
            { time: 48, text: "Nhớ giọng bố gọi con là, 'Cún ơi', vang tận ra ngoài ngõ, yeah" },
            { time: 50.5, text: "Nhớ bàn tay của mẹ vẫn chở che, vẫn hay thường vỗ về" },
            { time: 53, text: "Đòi mẹ sắm cho bộ loa, bảo là con thích được nghe nhạc" },
            { time: 55.5, text: "Đòi bố mua cho hai anh em cặp xe vì bọn con rất thích đạp xe đạp" },
            { time: 58, text: " Dù chẳng đáp ứng được hết nhưng bố vẫn luôn trìu mến và nhẹ nhàng " },
            { time: 61, text: " Nắng gió vẫn đón đưa con đi mặc cho mẹ đã bị trễ làm" },
            { time: 63.5, text: " Nhìn vào mắt bố con đã thấy những giọt nước mắt bố giấu trong bẽ bàng " },
            { time: 66.5, text: " Nhìn vào mắt mẹ con đã thấy những giấc mơ đang trôi qua thật khẽ khàng " },
            { time: 69, text: " Mọi thứ vốn bình yên nhưng rồi ai mà biết là nó lại rẽ làn " },
            { time: 72, text: " Con chỉ muốn trả lại thanh xuân cho bố mẹ dù biết điều này chẳng dễ dàng " },
            { time: 74.5, text: " Và con sẽ bước tiếp dù biết phía trước nó sẽ chẳng dễ dàng " },
            { time: 77, text: " Chỉ cần bố mẹ yên lòng thôi, bất cứ điều gì con cũng sẽ làm " },
            { time: 80, text: " Tất cả những đàm tiếu về ta gom luôn vào đây, con xé toạc " },
            { time: 82.5, text: " Dù biết là sẽ chẳng dễ dàng, nhưng vì bố mẹ, con giai sẽ làm (sẽ làm, sẽ làm) " },
            { time: 87, text: " Con sẽ làm, oh-oh-oh " },
            { time: 92.3, text: " Con sẽ làm, oh" },
            { time: 97.5, text: " Con sẽ làm, oh-oh-oh " },
            { time: 103.5, text: " Y-yah-ah-ah-ah, oh-oh " },
            { time: 106.8, text: " Đáp xuống Nội Bài, trong vali con là đống quà " },
            { time: 109, text: " Rót chén nước, thắp nén hương, thằng cu cháu mời các cụ về thăm nhà " },
            { time: 112, text: " Năm tháng trôi qua để lại những nếp nhăn trên tay của ông bà " },
            { time: 114.5, text: " Nhớ nồi bánh chưng mỗi dịp Tết và nhớ cái vị của cơm cà " },
            { time: 117.5, text: " Nhớ mấy cây phong lan ông bô hay ngắm nghía ở sân nhà " },
            { time: 120, text: " Nhớ mấy đứa em ngoan vẫn còn ngây ngô, giờ đã đều lớn cả " },
            { time: 122.6, text: " Dù có đi xa, khi trở về nhà thì vẫn cứ là phải 'Vâng, dạ' " },
            { time: 125.5, text: " (Có đi xa, khi trở về nhà thì vẫn cứ là phải 'Vâng, dạ')" },
            { time: 128, text: " Trăng sáng nên hôm nay con lại viết tiếp thêm một bài, mong rằng có thể xua tan đi hết bao muộn phiền " },
            { time: 133, text: " Chăm sóc con từng ngày để giờ con cất cánh tung bay, vẫn về đây dù cho con có kiếm cả bộn tiền " },
            { time: 138.5, text: " Đã có lúc thất bại, chẳng thể nào khiến con lung lay, con còn phải tập trung xử lý nốt mấy đầu việc " },
            { time: 144, text: " Và những nghĩ suy này lại làm từng dòng thơ cứ thế một dài, con lại thu vào mic tựa như những lời cầu nguyện " },
            { time: 149, text: " Có những lúc phải đi xa nhưng mà con chỉ muốn được trở về (trở về) " },
            { time: 154.5, text: " Có những lúc nghĩ sẽ buông xuôi nhưng mà con lại nhớ về bố mẹ (yeah, ah-ah, yeah) " },
            { time: 160, text: " Có những lúc phải đi xa nhưng mà con chỉ muốn được trở về " },
            { time: 165.5, text: " Có những lúc nghĩ sẽ buông xuôi nhưng mà con lại nhớ về bố mẹ (ah-ah-oh) " },
            { time: 170, text: " Cho con, cho con, cho con cả cuộc đời đằng sau lời nói dối kia " },
            { time: 175.9, text: " Mẹ đã cho con, cho con, cho con, cho con " },
            { time: 178.5, text: " Đi về nơi đâu để trở lại đây? " },
            { time: 181, text: " Mẹ đã cho con, cho con, cho con, cho con cả cuộc đời đằng sau lời nói dối kia " },
            { time: 186.3, text: " Mẹ đã cho con, cho con, cho con, cho con (cho con) " }
        ]
    },    
    {
        id: 3,
        title: "Unconditionally",
        artist: "Katy Perry",
        album: "Prism",
        albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "audio/Katy Perry - Unconditionally.mp3",
        videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 1000, text: "Oh no, did I get too close?" },
            { time: 1000, text: "Oh, did I almost see what's really on the inside?" },
            { time: 1000, text: "All your insecurities" },
            { time: 1000, text: "All the dirty laundry" },
            { time: 1000, text: "Never made me blink one time" },
            { time: 1000, text: "Unconditional, unconditionally" },
            { time: 1000, text: "I will love you unconditionally" },
            { time: 1000, text: "There is no fear now" },
            { time: 1000, text: "Let go and just be free" },
            { time: 1000, text: "I will love you unconditionally" },
            { time: 1000, text: "So come just as you are to me" },
            { time: 1000, text: "Don't need apologies" },
            { time: 1000, text: "Know that you are worthy" },
            { time: 1000, text: "I'll take your bad days with your good" },
            { time: 1000, text: "Walk through the storm, I would" },
            { time: 1000, text: "I'd do it all because I love you" },
            { time: 1000, text: "I love you" },
            { time: 1000, text: "Unconditional, unconditionally" },
            { time: 1000, text: "I will love you unconditionally" },
            { time: 1000, text: "There is no fear now" },
            { time: 1000, text: "Let go and just be free" },
            { time: 1000, text: "I will love you unconditionally" },
            { time: 1000, text: "So open up your heart and just let it begin" },
            { time: 1000, text: "Open up your heart and just let it begin" },
            { time: 1000, text: "Open up your heart and just let it begin" },
            { time: 1000, text: "Open up your heart" },
            { time: 1000, text: "Acceptance is the key to be" },
            { time: 1000, text: "To be truly free" },
            { time: 1000, text: "Will you do the same for me?" },
            { time: 1000, text: "Unconditional, unconditionally" },
            { time: 1000, text: "I will love you unconditionally" },
            { time: 1000, text: "There is no fear now" },
            { time: 1000, text: "Let go and just be free" },
            { time: 1000, text: "I will love you unconditionally" },
            { time: 1000, text: "I will love you (Unconditionally)" },
            { time: 1000, text: "I will love you" },
            { time: 1000, text: "I will love you unconditionally" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
        lyrics: [
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 100000, text: "You know you want me" },
            { time: 1000, text: "So don't keep sayin' our hands are tied" },
            { time: 1000, text: "You claim it's not in the cards" },
            { time: 1000, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 1000, text: "But you're here in my heart" },
            { time: 1000, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 1000, text: "What if we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "Nothin' could keep us apart" },
            { time: 1000, text: "You'd be the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one can say what we get to be" },
            { time: 1000, text: "So why don't we rewrite the stars?" },
            { time: 1000, text: "Maybe the world could be ours tonight" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You think it's easy" },
            { time: 1000, text: "You think I don't wanna run to you, yeah" },
            { time: 1000, text: "But there are mountains (There are mountains)" },
            { time: 1000, text: "And there are doors that we can't walk through" },
            { time: 1000, text: "I know you're wonderin' why" },
            { time: 1000, text: "Because we're able to be just you and me within these walls" },
            { time: 1000, text: "But when we go outside" },
            { time: 1000, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 1000, text: "No one can rewrite the stars" },
            { time: 1000, text: "How can you say you'll be mine?" },
            { time: 1000, text: "Everything keeps us apart" },
            { time: 1000, text: "And I'm not the one you were meant to find" },
            { time: 1000, text: "It's not up to you, it's not up to me" },
            { time: 1000, text: "When everyone tells us what we can be" },
            { time: 1000, text: "And how can we rewrite the stars?" },
            { time: 1000, text: "Say that the world can be ours tonight" },
            { time: 1000, text: "All I want is to fly with you" },
            { time: 1000, text: "All I want is to fall with you" },
            { time: 1000, text: "So just give me all of you" },
            { time: 1000, text: "It feels impossible" },
            { time: 1000, text: "It's not impossible" },
            { time: 1000, text: "Is it impossible?" },
            { time: 1000, text: "Say that it's possible" },
            { time: 1000, text: "How do we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "And nothin' could keep us apart" },
            { time: 1000, text: "'Cause you are the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one could say what we get to be" },
            { time: 1000, text: "And why don't we rewrite the stars?" },
            { time: 1000, text: "Changin' the world to be ours" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 1000, text: "But I can't have you" },
            { time: 1000, text: "We're bound to break and my hands are tied" }
        ]
    },
    {
        id: 5,
        title: "Message in Bottle",
        artist: "taylor swift",
        album: "OK Computer",
        albumArtUrl: "https://www.songmeaningsandfacts.com/wp-content/uploads/2022/11/Message-in-a-Bottle-by-Taylor-Swift.jpg",
        audioSrc: "audio/bocil.mp3",
        videoBgSrc: "videos/bocil.mp4",
        lyrics: [
            { time: 1000, text: "Cause you could be the one that I love" },
            { time: 1000, text: "I could be the one that you dream of " },
            { time: 1000, text: "A message in a bottle is all I can do" },
            { time: 1000, text: "Standin' here, hopin' it gets to you" },
            { time: 1000, text: "You could be the one that I keep, and Iu" },
            { time: 1000, text: "I could be the reason you can't sleep at night" },
            { time: 1000, text: "A mеssage in a bottle is all I can do" },
            { time: 1000, text: "Standin' herе, hopin' it gets to you" },
        ]
    },
    {
        id: 6,
        title: "Somebody's Pleasure",
        artist: "Aziz Hedra",
        album: "Unreleased",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220",
        audioSrc: "audio/Somebodys Pleasure.mp3",
        videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 1000, text: "I've been too busy ignoring and hiding" },
            { time: 1000, text: "About what my heart actually say" },
            { time: 1000, text: "Stay awake while I'm drowning on my thoughts" },
            { time: 1000, text: "Sometimes a happiness is just a happiness" },
            { time: 1000, text: "I've never been enjoying my serenity" },
            { time: 1000, text: "Even if I've got a lot of company" },
            { time: 1000, text: "That makes me happy" },
            { time: 1000, text: "Soul try to figure it out" },
            { time: 1000, text: "From where I've been escaping" },
            { time: 1000, text: "Running to end all the sin" },
            { time: 1000, text: "Get away from the pressure" },
            { time: 1000, text: "Wondering to get a love that is so pure" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just somebody's pleasure" },
            { time: 1000, text: "I always pretending and lying" },
            { time: 1000, text: "I got used to feel empty" },
            { time: 1000, text: "'Cause all I got is unhappy" },
            { time: 1000, text: "Happiness, can't I get happiness?" },
            { time: 1000, text: "I've never been enjoying my serenity" },
            { time: 1000, text: "Even if I've got a lot of company" },
            { time: 1000, text: "That makes me happy" },
            { time: 1000, text: "And I don't even feel my own pain" },
            { time: 1000, text: "Whatever when the storms pouring rain" },
            { time: 1000, text: "Feels like a wind" },
            { time: 1000, text: "Soul try to figure it out" },
            { time: 1000, text: "From where I've been escaping" },
            { time: 1000, text: "Running to end all the sin" },
            { time: 1000, text: "Get away from the pressure" },
            { time: 1000, text: "Wondering to get a love that is so pure" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just somebody's pleasure" },
            { time: 1000, text: "I hold imagination" },
            { time: 1000, text: "Cover all of the sadness" },
            { time: 1000, text: "I don't feel something special" },
            { time: 1000, text: "Turn off the phone to get some spatial" },
            { time: 1000, text: "Never thought I'd living in true" },
            { time: 1000, text: "The truth that has been so blue" },
            { time: 1000, text: "It was in a blink of an eye" },
            { time: 1000, text: "Find a way how to say goodbye" },
            { time: 1000, text: "I've got to take me away from all sadness" },
            { time: 1000, text: "Stitch all my wounds, confess all the sins" },
            { time: 1000, text: "And took all my insecurities" },
            { time: 1000, text: "When will I got the love that is so pure?" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 1000, text: "Gotta have, gotta have to always make sure" },
            { time: 1000, text: "I'm not just somebody's pleasure" }
        ]
    },
    {
        id: 7,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
            { time: 1000, text: "I wanna be your vacuum cleaner" },
            { time: 1000, text: "Breathing in your dust" },
            { time: 1000, text: "I wanna be your Ford Cortina" },
            { time: 1000, text: "I will never rust" },
            { time: 1000, text: "If you like your coffee hot" },
            { time: 1000, text: "Let me be your coffee pot" },
            { time: 1000, text: "You call the shots, babe" },
            { time: 1000, text: "I just wanna be yours" },
            
            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },

            { time: 1000, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 1000, text: "Let me be the portable heater that you'll get cold without" },
            { time: 1000, text: "I wanna be your setting lotion (wanna be)" },
            { time: 1000, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 1000, text: "At least as deep as the Pacific Ocean" },
            { time: 1000, text: "I wanna be yours" },

            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours" },

            { time: 1000, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 1000, text: "Breathing in your dust (Wanna be yours)" },
            { time: 1000, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 1000, text: "I will never rust (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" }
        ]
    },
    {
        id: 8,
        title: "Welcome and Goodbye",
        artist: "Dream, Ivory",
        album: "Welcome and Goodbye",
        albumArtUrl: "",
        audioSrc: "audio/dream_ivory_welcome_and_goodbye.mp3",
        videoBgSrc: "videos/welcome_and_goodbye_bg.mp4",
        lyrics: [
            { time: 1000, text: "Through it all once again, came to know my only friend" },
            { time: 1000, text: "Lost control, can't begin, I seek within" },
            { time: 1000, text: "To feel the warmth brought within your skin" },
            { time: 1000, text: "Did you know, for how it seemed" },
            { time: 1000, text: "I should've stayed and let you be" },
            { time: 1000, text: "Run into my heart so carelessly" },
            { time: 1000, text: "That's the reason I'm afraid" },
            { time: 1000, text: "You're thoughts that can't be tamed" },
            { time: 1000, text: "And I'm trying to be sane" },
            { time: 1000, text: "And I'm trying to be sane" },
            { time: 1000, text: "And I'm trying to be sane" }
        ]
    },
    {
        id: 9,
        title: "Let Down",
        artist: "Radiohead",
        album: "OK Computer",
        albumArtUrl: "",
        audioSrc: "audio/radiohead_let_down.mp3",
        videoBgSrc: "videos/let_down_bg.mp4",
        lyrics: [
            { time: 1000, text: "Transport, motorways and tramlines" },
            { time: 1000, text: "Starting and then stopping" },
            { time: 1000, text: "Taking off and landing" },
            { time: 1000, text: "The emptiest of feelings" },
            { time: 1000, text: "Disappointed people" },
            { time: 1000, text: "Clinging onto bottles" },
            { time: 1000, text: "And when it comes it's so, so disappointing" },
            { time: 1000, text: "Let down and hanging around" },
            { time: 1000, text: "Crushed like a bug in the ground" },
            { time: 1000, text: "Let down and hanging around" },
            { time: 1000, text: "Shell smashed, juices flowing" },
            { time: 1000, text: "Wings twitch, legs are going" },
            { time: 1000, text: "Don't get sentimental" },
            { time: 1000, text: "It always ends up drivel" },
            { time: 1000, text: "One day I am gonna grow wings" },
            { time: 1000, text: "A chemical reaction" },
            { time: 1000, text: "Hysterical and useless" },
            { time: 1000, text: "Hysterical and" },
            { time: 1000, text: "Let down and hanging around" },
            { time: 1000, text: "Crushed like a bug in the ground" },
            { time: 1000, text: "Let down and hanging around" }
        ]
    },
    {
        id: 10,
        title: "Mr Loverman",
        artist: "Ricky Montgomery",
        album: "Montgomery Ricky",
        albumArtUrl: "",
        audioSrc: "audio/ricky_montgomery_mr_loverman.mp3",
        videoBgSrc: "videos/mr_loverman_bg.mp4",
        lyrics: [
            { time: 1000, text: "I'm headed straight for the floor" },
            { time: 1000, text: "The alcohol's served its tour" },
            { time: 1000, text: "And it's headed straight for my skin" },
            { time: 1000, text: "Leaving me daft and dim" },
            { time: 1000, text: "I've got this shake in my legs" },
            { time: 1000, text: "Shaking the thoughts from my head" },
            { time: 1000, text: "But who put these waves in the door?" },
            { time: 1000, text: "I crack and out I pour" },
            { time: 1000, text: "I'm Mr. Loverman" },
            { time: 1000, text: "And I miss my lover, man" },
            { time: 1000, text: "I'm Mr. Loverman" },
            { time: 1000, text: "Oh, and I miss my lover" },
            { time: 1000, text: "The ways in which you talk to me" },
            { time: 1000, text: "Have me wishin' I were gone" },
            { time: 1000, text: "The ways that you say my name" },
            { time: 1000, text: "Have me runnin' on and on" },
            { time: 1000, text: "Oh, I'm crampin' up, I'm crampin' up" },
            { time: 1000, text: "But you're crackin' up, you're crackin' up" },
            { time: 1000, text: "I'm Mr. Loverman" },
            { time: 1000, text: "And I miss my loverman" },
            { time: 1000, text: "I'm Mr. Loverman" },
            { time: 1000, text: "Oh, and I miss my lover" }
        ]
    },
    {
        id: 11,
        title: "Where We Are",
        artist: "One Direction",
        album: "Midnight Memories (Deluxe Edition)",
        albumArtUrl: "",
        audioSrc: "audio/one_direction_where_we_are.mp3",
        videoBgSrc: "videos/where_we_are_bg.mp4",
        lyrics: [
            { time: 1000, text: "Remember when we would stay out too late" },
            { time: 1000, text: "We were young, havin' fun, made mistakes" },
            { time: 1000, text: "Did we ever know? Did we ever know?" },
            { time: 1000, text: "Did we ever know? Yeah" },
            { time: 1000, text: "All the things we'd just think of and say" },
            { time: 1000, text: "Never wrong, always right, not afraid" },
            { time: 1000, text: "Did we ever know? Did we ever know?" },
            { time: 1000, text: "Did we ever know?" },
            { time: 1000, text: "Is it all inside of my head?" },
            { time: 1000, text: "Maybe you still think I don't care" },
            { time: 1000, text: "But all I need is you" },
            { time: 1000, text: "Yeah, you know it's true, yeah, you know it's true" },
            { time: 1000, text: "Forget about where we are and let go" },
            { time: 1000, text: "We're so close" },
            { time: 1000, text: "If you don't know where to start, just hold on" },
            { time: 1000, text: "And don't run, no" },
            { time: 1000, text: "We're looking back, we messed around" },
            { time: 1000, text: "But that was then and this is now" },
            { time: 1000, text: "All we need's enough love to hold us" },
            { time: 1000, text: "Where we are" }
        ]
    },
    {
        id: 12,
        title: "Let Down",
        artist: "Radiohead",
        album: "OK Computer",
        albumArtUrl: "https://images.genius.com/ea1fda114f5091bce67f87cf8437b647.1000x1000x1.png",
        audioSrc: "audio/letdown.mp3",
        videoBgSrc: "videos/letdown.mp4",
        lyrics: [
            { time: 0.2  ,  text: "Floor collapsing Floating" },
            { time: 5,  text: "bouncing back and " },
            { time: 7, text: "One day, I am gonna grow wings" },
            { time: 14.2, text: "A chemical reaction" },
            { time: 17.9, text: "Hysterical and useless" },
            { time: 23, text: "Hysterical and" },
            { time: 26, text: "Let down and hanging around" },
            { time: 33, text: "Crushed like a bug in the ground" },
            { time: 40, text: "Let down and hanging around" }

        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Điều hướng trang ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Đảm bảo trang chi tiết bị ẩn
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Ẩn video nền
    backgroundVideo.pause(); // Tạm dừng video nền
    backgroundVideo.src = ""; // Xóa src video
    backgroundVideo.load();
    pauseTrack(); // Tạm dừng nhạc khi quay lại trang chủ
}

// Hàm hiển thị trang chi tiết bài hát (vẫn được giữ lại, nhưng không được gọi từ danh sách bài hát)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Album Không Xác Định";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Tạm dừng video nền
    backgroundVideo.src = ""; // Xóa src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Hiển thị video nền

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Lỗi phát video nền:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Xóa src nếu không có video đặc biệt
    }
}

// --- Logic Trang Chủ ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Không có bài hát nào.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Thay đổi quan trọng ở đây ---
        // Khi nhấp vào mục bài hát, tải trực tiếp & phát bài hát rồi hiển thị trang trình phát
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Chuyển trực tiếp đến trang trình phát nhạc
        });

// Event listener cho hover (tắt trên mobile)
        if (!/Mobi|Android/i.test(navigator.userAgent)) {
            listItem.addEventListener('mouseenter', () => {
                // Chỉ kích hoạt video nền nếu chúng ta ở trang chủ
                if (homePage.classList.contains('active') && song.videoBgSrc) {
                    backgroundVideo.src = song.videoBgSrc;
                    backgroundVideo.load();
                    backgroundVideoContainer.classList.add('active');
                    backgroundVideo.play().catch(e => console.error("Lỗi phát video khi hover:", e));
                    bodyElement.classList.add('player-active-bg'); // Thêm lớp cho màu nền body
                }
            });
            listItem.addEventListener('mouseleave', () => {
                // Ẩn video nền chỉ khi chúng ta ở trang chủ
                if (homePage.classList.contains('active')) {
                    backgroundVideoContainer.classList.remove('active');
                    backgroundVideo.pause(); // Tạm dừng video khi chuột rời đi
                    backgroundVideo.src = ""; // Xóa src để không phát ở nền
                    backgroundVideo.load();
                    bodyElement.classList.remove('player-active-bg'); // Xóa lớp màu nền body
                }
            });
        }

        songListElement.appendChild(listItem);
    });
}

// --- Logic Trình Phát ---
function loadSong(song) {
    if (!song) {
        console.error("Bài hát không tìm thấy!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Lỗi";
        playerTrackTitle.textContent = "Bài Hát Không Có Sẵn";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lời bài hát không có sẵn.</p>"; // Thay textContent bằng innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;

    renderLyrics(song.lyrics); // Gọi hàm renderLyrics

    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Hàm mới để hiển thị lời bài hát
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Xóa sạch container lời bài hát
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lời bài hát không có sẵn cho bài hát này.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Lưu timestamp trong data-attribute
        span.classList.add('lyric-line'); // Thêm lớp cho styling
        lyricsContainer.appendChild(span);
        // Xóa việc thêm <br> thủ công, sử dụng CSS display:block hoặc flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Không có bài hát nào để phát.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Lỗi khi phát:", error));
    if (playerPage.classList.contains('active')) {
        backgroundVideo.play().catch(e => console.error("Lỗi phát video nền:", e));
    }
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    if (playerPage.classList.contains('active')) {
        backgroundVideo.pause();
    }
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Cập nhật video nền
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Cập nhật video nền
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Được xử lý bởi audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Cập nhật video nền
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Cập nhật video nền
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lời bài hát ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Xác định thời gian kết thúc của dòng lời bài hát này. Nếu đây là dòng cuối, giả định kết thúc ở cuối bài hát.
            // Hoặc tốt hơn, giả định kết thúc ngay trước khi dòng tiếp theo bắt đầu.
            let nextLineTime = Infinity;
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Tự động cuộn lời bài hát chỉ khi dòng được đánh dấu không hiển thị ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Kiểm tra xem dòng có nằm ngoài viewport của container không
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Cuộn để dòng gần nhất xuất hiện trong viewport, với animation mượt mà
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Xáo trộn: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Chế độ lặp: " + repeatMode);
});

playerRatingSlider.addEventListener('input', () => {
    currentRatingDisplay.textContent = playerRatingSlider.value;
    console.log("Đánh giá: " + playerRatingSlider.value);
});

// Theme Toggle Functionality
let isDarkTheme = true; // Default to dark theme

themeToggleBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    updateTheme();
});

function updateTheme() {
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    if (isDarkTheme) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.className = 'fas fa-moon';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.className = 'fas fa-sun';
    }

    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Load theme preference on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        isDarkTheme = false;
    }
    updateTheme();
}

// Typewriter effect for subtitle
function typeWriter() {
    const typewriter = document.getElementById('typewriter');
    const texts = [
        'Hellooo<3',
        'Enjoy the music!',
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let deletingSpeed = 50; // Faster deleting speed

    function type() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                deletingSpeed = (currentText === 'Hellooo<3' || currentText === 'Enjoy the music!') ? 2000 : 50; // Longer pause for "Hellooo<3" and "Enjoy the music!" before deleting
            }
        } else {
            typewriter.textContent = currentText.substring(0, charIndex);
            charIndex--;

            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 150;
                charIndex = 0;
            }
        }

        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    setTimeout(type, 500); // Start after 0.5s
}

// Add entrance animation for song list items
function animateSongList() {
    const songItems = document.querySelectorAll('.song-list li');
    songItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners cho các nút điều hướng
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Từ trang chi tiết về trang chủ
backToHomeBtn.addEventListener('click', showHomePage); // Từ trang trình phát về trang chủ

// Event Listener cho nút phát từ trang chi tiết (nếu bạn muốn sử dụng)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Khởi tạo ---
function init() {
    console.log("Đang khởi tạo..."); // Thêm log cho khởi tạo
    console.log("Độ dài mảng bài hát:", songs.length); // Kiểm tra số lượng bài hát
    console.log("songListElement:", songListElement); // Kiểm tra xem songListElement có được tìm thấy không

    renderSongList(); // Đây là phần render danh sách bài hát

    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Điều này sẽ hiển thị nếu mảng songs trống
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Nhạc";
        playerTrackTitle.textContent = "Không Có Bài Hát";
        playerTrackArtist.textContent = "Thêm bài hát";
        lyricsContainer.innerHTML = "<p>Vui lòng thêm bài hát từ danh sách.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Đặt tốc độ ban đầu
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Cập nhật hiển thị tốc độ
    currentRatingDisplay.textContent = playerRatingSlider.value; // Cập nhật hiển thị đánh giá
    loadTheme(); // Load theme preference
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Bắt đầu từ trang danh sách bài hát
    typeWriter(); // Start typewriter effect
    setTimeout(animateSongList, 1000); // Animate song list after page load
    console.log("Khởi tạo hoàn tất."); // Log hoàn tất khởi tạo
}

init();
