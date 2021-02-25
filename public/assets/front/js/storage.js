var testObject = { 'contact-us': 'https://www.gowithgbi.com/images/banner_contact.jpg', 
                    'bannerimg1': 'https://www.gowithgbi.com/assets/front/images/banner.jpg',
                    'bannerimg2': 'https://www.gowithgbi.com/assets/front/images/banner1.jpg',
                    'bannerimg3': 'https://www.gowithgbi.com/assets/front/images/banner2.jpg',
                    'faqimg': 'https://www.gowithgbi.com/assets/front/images/faq_banner.jpg',
                    'safetyimg': 'https://www.gowithgbi.com/assets/front/images/safety-security.jpg',
                    'safetyimg1': 'https://www.gowithgbi.com/assets/front/images/safety_security.jpg', 
                    'traveleduimg': 'https://www.gowithgbi.com/assets/front/images/travel-&-education.jpg',
                    'ourstoryimg': 'https://www.gowithgbi.com/assets/front/images/our_story.jpg',
                    'ourstoryimg1': 'https://www.gowithgbi.com/assets/front/images/mission.png',
                    'ourstoryimg2': 'https://www.gowithgbi.com/assets/front/images/vision.png',
                    'howwework': 'https://www.gowithgbi.com/assets/front/images/howwework.jpg',
                    'jointeamimg': 'https://www.gowithgbi.com/assets/front/images/career.jpg',
                    'bgimg': 'https://www.gowithgbi.com/assets/front/images/team.png',};


localStorage.setItem("testObject", JSON.stringify(testObject));
JSON.parse(localStorage.getItem("testObject"));