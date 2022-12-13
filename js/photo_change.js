let LeaderPhoto = document.querySelector('.team__photo_leader');
let MemberPhotos = document.querySelectorAll('.team__photo_member');
var n = 0;


MemberPhotos.forEach( (MemberPhoto) => {
    MemberPhoto.addEventListener('click', ChangePhoto);


function ChangePhoto(evt) {
    var Leader= LeaderPhoto.classList[3];
    var Member = MemberPhoto.classList[2];
    LeaderPhoto.classList.remove(LeaderPhoto.classList[3]);
    MemberPhoto.classList.remove(MemberPhoto.classList[2]);
    LeaderPhoto.classList.add(Member);
    MemberPhoto.classList.add(Leader);
}

});