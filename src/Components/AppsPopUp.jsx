import React from "react";

function AppsPopUp() {
  const appData = [
    {
      id: 1,
      url: "https://myaccount.google.com/?utm_source=OGB&amp;utm_medium=app",
      title: "Account",
    },
    { id: 2, url: "", title: "Search" },
    { id: 3, url: "https://www.google.com/maps", title: "Maps" },
    { id: 4, url: "https://www.youtube.com/", title: "YouTube" },
    { id: 5, url: "https://play.google.com/", title: "Play" },
    { id: 6, url: "https://news.google.com/", title: "News" },
    { id: 7, url: "https://mail.google.com/", title: "Gmail" },
    { id: 8, url: "https://meet.google.com/", title: "Meet" },
    { id: 9, url: "https://mail.google.com/chat/", title: "Chat" },
    { id: 10, url: "https://contacts.google.com/", title: "Contacts" },
    { id: 11, url: "https://drive.google.com/", title: "Drive" },
    { id: 12, url: "https://calendar.google.com/", title: "Calender" },
    { id: 13, url: "https://translate.google.com/", title: "Translate" },
    { id: 14, url: "https://photos.google.com/", title: "Photo" },
    { id: 15, url: "https://myadcenter.google.com/", title: "My Ad Center" },
    { id: 16, url: "https://shopping.google.com/", title: "Shopping" },
  ];
  const appItem = appData.map((app) => (
    <div key={app.toString()} className="col-4 apps-icon text-center">
      <a href={`${app.url}`} target="_top">
        <div className={`app-img img${app.id}`}></div>
        <span className="app-title">{app.title}</span>
      </a>
    </div>
  ));
  return (
    <div className="app-popup">
      <div className="popup-main">
        <div className="row"></div>
        <div className="row">{appItem}</div>
      </div>
    </div>
  );
}

export default AppsPopUp;
