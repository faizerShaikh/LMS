'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const FAQSeedData = [
      {
        "id": "9151d8d8-8bab-4d44-8b08-2de5392e4de1",
        "question": "WHy Indian Universities?",
        "visiblity": true,
        "createdAt": "2024-02-22T11:17:21.183Z",
        "updatedAt": "2024-02-22T11:17:21.183Z",
        
    }
    ];
    // await queryInterface.bulkInsert('FAQs', FAQSeedData, {});
    console.log('FAQ seeded successfully.');

    const FAQTopic=[
      {
        "id": "c059b1a7-9f75-4d7a-89cd-c8916a9a1ecd",
        "topic": "Advantage - Indian Universities",
        "answer": "Globally recognized Universities Degree programs start at $75 per month Study from the comfort of your home Work & Study UGC-entitled degrees",
        "createdAt": "2024-02-22T11:19:40.121Z",
        "updatedAt": "2024-02-22T11:19:40.121Z",
        "faqId": "9151d8d8-8bab-4d44-8b08-2de5392e4de7"
    },
    {
        "id": "a3836baf-5810-45d0-8605-89112824f7a4",
        "topic": "Indian Universities",
        "answer": "All degrees offered by Indian Universities are regulated by the UGC – University Grants Commission of India (Government of India).",
        "createdAt": "2024-02-22T11:21:00.426Z",
        "updatedAt": "2024-02-22T11:21:00.426Z",
        "faqId": "9151d8d8-8bab-4d44-8b08-2de5392e4de7"
    },
    {
        "id": "0c422898-1f99-4dbe-a939-99e28a397d7c",
        "topic": "Online Universities degree program",
        "answer": "As per UGC – University Grants Commission of India (Government of India) all degrees offered in ‘Online Mode” are the same as programs offered on campus.They are UGC-entitled degrees.",
        "createdAt": "2024-02-22T11:22:42.497Z",
        "updatedAt": "2024-02-22T11:22:42.497Z",
        "faqId": "9151d8d8-8bab-4d44-8b08-2de5392e4de7"
    },
    {
        "id": "371a6502-2a3f-4b3f-8c6c-83c314d3d481",
        "topic": "types of degree programs",
        "answer": "Undergraduate – BBA, BCom, and BCA Graduate/Masters – MBA, MCom, MCA, and MA",
        "createdAt": "2024-02-22T11:23:50.901Z",
        "updatedAt": "2024-02-22T11:23:50.901Z",
        "faqId": "9151d8d8-8bab-4d44-8b08-2de5392e4de7"
    },
    {
        "id": "75d58bbf-75ad-4c01-b839-6b5c8c22ed98",
        "topic": "RiseBack",
        "answer": "RiseBack is one of the first and only EdTech platform offering Undergraduate & Graduate degree programs and has partnered with leading Indian Universities to offer affordable University Degree to students & professionals in USA, Africa & GCC region. Fees are paid directly to the University. University offers their program to the students through their",
        "createdAt": "2024-02-22T11:24:32.631Z",
        "updatedAt": "2024-02-22T11:24:32.631Z",
        "faqId": "9151d8d8-8bab-4d44-8b08-2de5392e4de7"
    },
    {
        "id": "71e09ca9-dff3-4714-a92c-b2318b03d2bf",
        "topic": "Admission process",
        "answer": "Step – 1 Choose the degree program Step – 2 Choose the University Step – 3 Create an account, upload documents & pay the respective fees of the University.Step- 4 Once, admission is approved the University would directly send you login access to the LMS – Learning Management System.",
        "createdAt": "2024-02-22T11:25:24.512Z",
        "updatedAt": "2024-02-22T11:25:24.512Z",
        "faqId": "9151d8d8-8bab-4d44-8b08-2de5392e4de7"
    },
    {
        "id": "663f9c2b-fa6e-4e04-8c1c-f921aba39f7e",
        "topic": "Global Recognition",
        "answer": "Indian Universities over the years created super successful alumni who are heads of Fortune 500 companies, Noble Laureates, Scientists, Academicians, IT Professionals, Serial Entrepreneurs & investors.",
        "createdAt": "2024-02-22T11:26:00.865Z",
        "updatedAt": "2024-02-22T11:26:00.865Z",
        "faqId": "9151d8d8-8bab-4d44-8b08-2de5392e4de7"
    }
    ]
    // await queryInterface.bulkInsert('faq-topics', FAQTopic, {});
    console.log('FAQ Topics seeded successfully.');

    const PressRelease=[
      {
        "id": "c579e488-8bc0-4421-a7f2-9d0b0d3b0c97",
        "title": "3.RiseBack Launched Indonesia to propel Tech ENterprenuership and lucrative Tech Careers",
        "description": "RiseBack's recent launch in Indonesia marks a pivotal moment for the tech ecosystem, ushering in a new era of opportunities for aspiring entrepreneurs and seasoned professionals alike. With a focus on fostering innovation and supporting tech ventures, RiseBack aims to ignite a wave of entrepreneurship while simultaneously paving the way for lucrative careers in the tech industry. Through its comprehensive programs and resources, RiseBack is poised to empower individuals to thrive in the dynamic landscape of technology, driving economic growth and innovation across the nation",
        "link": "https://menafn.com/1104557109/Launched-Riseback-1St-Edutech-Platform-To-Offer-Affordable-Undergraduate-Graduate-Degree-Programs-To-American-Students",
        "coverImage": "/media/pressRelease/Untitled-1-1708585752559-981706914.jpg",
        "isFeatured": "true",
        "createdAt": "2024-02-22T07:08:00.280Z",
        "updatedAt": "2024-02-22T07:08:00.280Z"
    },
    {
        "id": "c36f1969-45a4-4f67-862b-3fa676dd2432",
        "title": "4.RiseBack Launched Indonesia to propel Tech ENterprenuership and lucrative Tech Careers",
        "description": "RiseBack's recent launch in Indonesia marks a pivotal moment for the tech ecosystem, ushering in a new era of opportunities for aspiring entrepreneurs and seasoned professionals alike. With a focus on fostering innovation and supporting tech ventures, RiseBack aims to ignite a wave of entrepreneurship while simultaneously paving the way for lucrative careers in the tech industry. Through its comprehensive programs and resources, RiseBack is poised to empower individuals to thrive in the dynamic landscape of technology, driving economic growth and innovation across the nation",
        "link": "https://menafn.com/1104557109/Launched-Riseback-1St-Edutech-Platform-To-Offer-Affordable-Undergraduate-Graduate-Degree-Programs-To-American-Students",
        "coverImage": "/media/pressRelease/Untitled-1-1708585752559-981706914.jpg",
        "isFeatured": "true",
        "createdAt": "2024-02-22T07:08:02.563Z",
        "updatedAt": "2024-02-22T07:09:12.626Z"
    },
    {
        "id": "ddc9881d-9de8-498c-abb7-0703b0c71c4a",
        "title": "5.RiseBack Launched Indonesia to propel Tech ENterprenuership and lucrative Tech Careers",
        "description": "RiseBack's recent launch in Indonesia marks a pivotal moment for the tech ecosystem, ushering in a new era of opportunities for aspiring entrepreneurs and seasoned professionals alike. With a focus on fostering innovation and supporting tech ventures, RiseBack aims to ignite a wave of entrepreneurship while simultaneously paving the way for lucrative careers in the tech industry. Through its comprehensive programs and resources, RiseBack is poised to empower individuals to thrive in the dynamic landscape of technology, driving economic growth and innovation across the nation",
        "link": "https://menafn.com/1104557109/Launched-Riseback-1St-Edutech-Platform-To-Offer-Affordable-Undergraduate-Graduate-Degree-Programs-To-American-Students",
        "coverImage": "/media/pressRelease/Untitled-1-1708585752559-981706914.jpg",
        "isFeatured": "true",
        "createdAt": "2024-02-22T07:07:54.071Z",
        "updatedAt": "2024-02-22T07:07:54.071Z"
    },
    {
        "id": "75abec63-1898-4fbf-a805-715bf42f63cd",
        "title": "1.RiseBack Launched Indonesia to propel Tech ENterprenuership and lucrative Tech Careers",
        "description": "RiseBack's recent launch in Indonesia marks a pivotal moment for the tech ecosystem, ushering in a new era of opportunities for aspiring entrepreneurs and seasoned professionals alike. With a focus on fostering innovation and supporting tech ventures, RiseBack aims to ignite a wave of entrepreneurship while simultaneously paving the way for lucrative careers in the tech industry. Through its comprehensive programs and resources, RiseBack is poised to empower individuals to thrive in the dynamic landscape of technology, driving economic growth and innovation across the nation",
        "link": "https://menafn.com/1104557109/Launched-Riseback-1St-Edutech-Platform-To-Offer-Affordable-Undergraduate-Graduate-Degree-Programs-To-American-Students",
        "coverImage": "/media/pressRelease/Untitled-1-1708585752559-981706914.jpg",
        "isFeatured": "true",
        "createdAt": "2024-02-22T07:06:47.512Z",
        "updatedAt": "2024-02-22T07:06:47.512Z"
    },
    {
        "id": "f3799d88-9a0c-4e9b-9bc4-bbd582bcce82",
        "title": "2.RiseBack Launched Indonesia to propel Tech ENterprenuership and lucrative Tech Careers",
        "description": "RiseBack's recent launch in Indonesia marks a pivotal moment for the tech ecosystem, ushering in a new era of opportunities for aspiring entrepreneurs and seasoned professionals alike. With a focus on fostering innovation and supporting tech ventures, RiseBack aims to ignite a wave of entrepreneurship while simultaneously paving the way for lucrative careers in the tech industry. Through its comprehensive programs and resources, RiseBack is poised to empower individuals to thrive in the dynamic landscape of technology, driving economic growth and innovation across the nation",
        "link": "https://menafn.com/1104557109/Launched-Riseback-1St-Edutech-Platform-To-Offer-Affordable-Undergraduate-Graduate-Degree-Programs-To-American-Students",
        "coverImage": "/media/pressRelease/Untitled-1-1708585752559-981706914.jpg",
        "isFeatured": "true",
        "createdAt": "2024-02-22T07:07:58.304Z",
        "updatedAt": "2024-02-22T07:07:58.304Z"
    },
    {
        "id": "b7865e6d-1bf2-4f53-a332-1f9927257afe",
        "title": "6.RiseBack Launched Indonesia to propel Tech ENterprenuership and lucrative Tech Careers",
        "description": "RiseBack's recent launch in Indonesia marks a pivotal moment for the tech ecosystem, ushering in a new era of opportunities for aspiring entrepreneurs and seasoned professionals alike. With a focus on fostering innovation and supporting tech ventures, RiseBack aims to ignite a wave of entrepreneurship while simultaneously paving the way for lucrative careers in the tech industry. Through its comprehensive programs and resources, RiseBack is poised to empower individuals to thrive in the dynamic landscape of technology, driving economic growth and innovation across the nation",
        "link": "https://menafn.com/1104557109/Launched-Riseback-1St-Edutech-Platform-To-Offer-Affordable-Undergraduate-Graduate-Degree-Programs-To-American-Students",
        "coverImage": "/media/pressRelease/Untitled-1-1708585752559-981706914.jpg",
        "isFeatured": "true",
        "createdAt": "2024-02-22T07:07:56.157Z",
        "updatedAt": "2024-02-22T07:07:56.157Z"
    }
    ]
    // await queryInterface.bulkInsert('press-releases',PressRelease,{})
    console.log('Press Relase seeded successfully')

    const pageContent=[
        {
          "id": "cedc3a05-0379-4ad7-9632-0f65a8c452f8",
          "name": "for-government",
          "coverImage": "/media/pageContent/For-Government-page-1708435571402-906668001.jpg",
          "title": "Educate, Empower, Elevate & Excel",
          "titleDescription": "Empower both citizens and government employees by equipping them with highly desirable technological skills. Technology is reshaping global economy. Rise Back offers affordable IT certificate programs and University degree programs starting at an affordable $60 per month.",
          "pageDescription": "The vision of Rise Back is to empower students and professionals through accessible education certificate and university degree programs. Rise Back seeks to collaborate with government departments, ministries, organizations, NGOs, and individuals committed to empowering their fellow citizens with affordable IT training and university degree programs. Given the pivotal role of technology in shaping various aspects of humanity, including healthcare, education, agriculture, and the environment, training fellow citizens fosters innovation, entrepreneurship, startups, and sustainable growth.",
          "createdAt": "2024-02-20T12:57:59.565Z",
          "updatedAt": "2024-02-20T13:26:11.498Z",
          
      },
      {
          "id": "73e3c43f-3f80-43ac-9ce3-54e2f7d46f08",
          "name": "for-placement",
          "coverImage": "/media/pageContent/For-Placement-1708436021033-190077189.jpg",
          "title": "Educate, Empower, Elevate & Excel",
          "titleDescription": "Rise Back provides cost-effective corporate training programs designed for individuals, teams, and organizations seeking to foster growth within their respective entities. Contact us for more information.",
          "pageDescription": "Rise Back aspires to empower students and professionals through accessible education certificates and university degree programs. We strive to collaborate with universities, colleges, schools, and institutes dedicated to providing students with affordable IT training. Acknowledging the pivotal role of technology in shaping various aspects of humanity, including healthcare, education, agriculture, and the environment, the training",
          "createdAt": "2024-02-20T12:49:59.979Z",
          "updatedAt": "2024-02-20T13:33:41.080Z",
      },
      {
          "id": "c2fd213c-4d0a-430c-b459-e56733db0e4c",
          "name": "for-organization",
          "coverImage": "/media/pageContent/For-Orgnization-page-1708436061701-335939385.jpg",
          "title": "Educate, Empower, Elevate & Excel",
          "titleDescription": "Rise Back provides cost-effective corporate training programs designed for individuals, teams, and organizations seeking to foster growth within their respective entities. Contact us for more information.",
          "pageDescription": "Training enhances skills, minimizes downtime, boosts motivation, fosters team spirit, improves individual retention, and contributes to the overall growth of the organization. ",
          "createdAt": "2024-02-20T12:47:40.550Z",
          "updatedAt": "2024-02-20T13:34:21.755Z",
  
      },
      {
          "id": "252887f3-c0ad-4163-a60d-0adb8923891f",
          "name": "for-universities",
          "coverImage": "/media/pageContent/For--University-1708435840292-658085320.jpg",
          "title": "Educate, Empower, Elevate & Excel",
          "titleDescription": "Enhance student employability to attract more enrollment. Provide students with high-demand skills, preparing them for success in the job market additionally, we are partnering with universities, colleges, and institues to provide their students with career- focused IT training certificate programns",
          "pageDescription": "Rise Back is to empower students and professionals through accessible education certificate and university degree programs. We strive to collaborate with universities, colleges, schools, and institutes dedicated to providing students with affordable IT training. Acknowledging the pivotal role of technology in shaping various aspects of humanity, including healthcare, education, agriculture, and the environment, the training",
          "createdAt": "2024-02-20T12:56:02.640Z",
          "updatedAt": "2024-02-20T13:30:40.369Z",
      },
      {
          "id": "1007a96d-1dd6-4cb6-8162-e458dcc81f8b",
          "name": "for-partnership",
          "coverImage": "/media/pageContent/For-Partnership-1708436102394-683687406.jpg",
          "title": "Educate, Empower, Elevate & Excel",
          "titleDescription": "Rise Back welcomes partnerships with organizations and individuals committed to the shared goals of Educating,Empowering,Elevating,and Excelling.Together,we strive to create a collaborative environment that fosters positive impact and transformative growth in the realm of education.",
          "pageDescription": "RiseBack aspires to empower students and professionals through accessible education, offering certificates and university degree programs. We collaborate with universities, colleges, schools, and institutes dedicated to providing affordable IT training. Recognizing the pivotal role of technology in shaping various aspects of humanity, including healthcare, education, agriculture, and the environment, our training ",
          "createdAt": "2024-02-20T12:44:35.300Z",
          "updatedAt": "2024-02-20T13:35:02.458Z",
      }
      ]
      await queryInterface.bulkInsert('page contents',pageContent,{})
      console.log('Page Content data seeded sucessfully')
  
    const gallery=[
      {
        "id": "350a0827-3665-4161-8a26-5fdbfb69e2bf",
        "coverImage": "/media/gallery/Entrepreneurship-1708501380658-612058310.jpg",
        "name": "Entrepreneurship",
        "description": "Technology education drives entrepreneurship by empowering individuals with the skills to navigate the digital landscape. Proficiency in technology opens doors for innovative ventures, encourages a culture of problem-solving, and fosters the creation of tech-driven startups.",
        "createdAt": "2024-02-21T07:37:57.345Z",
        "updatedAt": "2024-02-21T07:43:00.848Z",
        "pageId": "cedc3a05-0379-4ad7-9632-0f65a8c452fe"
    },
    {
        "id": "e47cade7-28b4-44e8-9504-47b45c693f7e",
        "coverImage": "/media/gallery/Internship-1708511035586-541881331.jpg",
        "name": "Internship",
        "description": "Our students gain practical experience and industry insight through our enriching internship programs, bridging the gap between academic learning and real-world application.",
        "createdAt": "2024-02-21T10:19:04.626Z",
        "updatedAt": "2024-02-21T10:23:55.673Z",
        "pageId": "73e3c43f-3f80-43ac-9ce3-54e2f7d46f08"
    },
    {
        "id": "066820fa-66ca-4b0a-bd01-33a3435e2afb",
        "coverImage": "/media/gallery/Events-1708511059426-756078913.jpg",
        "name": "Events",
        "description": "Our students actively participate in business events, fostering connections with startups and industry professionals to gain valuable insights and expand their networks.",
        "createdAt": "2024-02-21T10:19:59.227Z",
        "updatedAt": "2024-02-21T10:24:19.472Z",
        "pageId": "73e3c43f-3f80-43ac-9ce3-54e2f7d46f08"
    },
    {
        "id": "355231c7-b800-4b9e-96f3-102f271b4c6d",
        "coverImage": "/media/gallery/Boost workplace engagement-1708504750293-298895716.jpg",
        "name": "Boost Workplace Engagement",
        "description": "Training prevents boredom, promotes internal growth, and enhances company culture. Forbes data highlights a direct correlation: low empowerment leads to low engagement (24th percentile), while high empowerment boosts engagement to the 79th percentile.",
        "createdAt": "2024-02-21T08:35:13.280Z",
        "updatedAt": "2024-02-21T08:39:10.329Z",
        "pageId": "c2fd213c-4d0a-430c-b459-e56733db0e4c"
    },
    {
        "id": "6816e505-e8bb-4658-97c2-f0cbf54f2dbd",
        "coverImage": "/media/gallery/Empowerment-1708504831496-335710145.jpg",
        "name": "Empowerment",
        "description": "Empowered leaders drive influence and trust. This autonomy fosters a sense of value and confidence among employees, as defined by SHRM.",
        "createdAt": "2024-02-21T08:35:59.454Z",
        "updatedAt": "2024-02-21T08:40:31.532Z",
        "pageId": "c2fd213c-4d0a-430c-b459-e56733db0e4c"
    },
    {
        "id": "a96a116e-61ab-48e2-aca1-7ecd4ca77cdc",
        "coverImage": "/media/gallery/Reduce downtime-1708504865276-137432576.jpg",
        "name": "Reduce downtime",
        "description": "Reduce downtime by investing in employee training. Enhanced knowledge of equipment and processes enables quicker identification and resolution of potential issues (FasterCapital.com).",
        "createdAt": "2024-02-21T08:36:54.690Z",
        "updatedAt": "2024-02-21T08:41:05.300Z",
        "pageId": "c2fd213c-4d0a-430c-b459-e56733db0e4c"
    },
    {
        "id": "e2a9a811-6901-4f63-b15c-9c0cebc58552",
        "coverImage": "/media/gallery/Job-Creation-1708501424641-8605797.jpg",
        "name": "Job Creation",
        "description": "Proficiency in technology opens doors to high-paying, diverse employment opportunities, spanning industries that increasingly rely on digital innovation. As the demand for tech-savvy professionals continues to rise, technology education becomes a crucial driver for job creation.",
        "createdAt": "2024-02-21T07:38:58.329Z",
        "updatedAt": "2024-02-21T07:43:44.690Z",
        "pageId": "cedc3a05-0379-4ad7-9632-0f65a8c452fe"
    },
    {
        "id": "3795d9c7-3972-4506-aa8f-5c4c032dd7dd",
        "coverImage": "/media/gallery/Career fair-1708510988242-967316618.jpg",
        "name": "Career Fair",
        "description": "participate career fairs to connect students with potential employers, creating valuable opportunities for networking and career advancement.",
        "createdAt": "2024-02-21T10:16:33.602Z",
        "updatedAt": "2024-02-21T10:23:08.308Z",
        "pageId": "73e3c43f-3f80-43ac-9ce3-54e2f7d46f08"
    },
    {
        "id": "2d7ba9b5-e0ae-4cca-9080-4e48a9e7351e",
        "coverImage": "/media/gallery/Entrepreneurship-1708501380658-612058310.jpg",
        "name": "Entrepreneurship",
        "description": "Technology education drives entrepreneurship by empowering individuals with the skills to navigate the digital landscape. Proficiency in technology opens doors for innovative ventures, encourages a culture of problem-solving, and fosters the creation of tech-driven startups.",
        "createdAt": "2024-02-21T10:54:55.648Z",
        "updatedAt": "2024-02-21T10:54:55.648Z",
        "pageId": "252887f3-c0ad-4163-a60d-0adb8923891f"
    },
    {
        "id": "da9de753-bd3f-4414-8044-34a4887dc5d2",
        "coverImage": "/media/gallery/Job-Creation-1708501424641-8605797.jpg",
        "name": "Job Creation",
        "description": "Proficiency in technology opens doors to high-paying, diverse employment opportunities, spanning industries that increasingly rely on digital innovation. As the demand for tech-savvy professionals continues to rise, technology education becomes a crucial driver for job creation.",
        "createdAt": "2024-02-21T11:00:52.290Z",
        "updatedAt": "2024-02-21T11:00:52.290Z",
        "pageId": "252887f3-c0ad-4163-a60d-0adb8923891f"
    },
    {
        "id": "d8ed4b2b-fed3-4c32-b8d7-e78b35f0cc32",
        "coverImage": "/media/gallery/Economic-Growth-1708501307086-117483698.jpg",
        "name": "Economic Growth",
        "description": "Technology education fuels economic growth by training individuals with essential skills for the digital era. Proficient tech skills in the workforce drive innovation, attract investments, and stimulate entrepreneurship, leading to sustained economic development and global competitiveness.",
        "createdAt": "2024-02-21T11:01:33.196Z",
        "updatedAt": "2024-02-21T11:01:33.196Z",
        "pageId": "252887f3-c0ad-4163-a60d-0adb8923891f"
    },
    {
        "id": "72ff160a-6bc9-4abb-884f-86a51de20431",
        "coverImage": "/media/gallery/Councelling-1708511013727-39777004.jpg",
        "name": "Counselling",
        "description": "We provide essential career counseling and mentorship to empower students in making informed decisions and navigating their professional journeys with confidence.",
        "createdAt": "2024-02-21T10:18:00.852Z",
        "updatedAt": "2024-02-21T10:23:33.777Z",
        "pageId": "73e3c43f-3f80-43ac-9ce3-54e2f7d46f08"
    },
    {
        "id": "3614b07a-c6b4-4833-87bd-fa2a618edd4a",
        "coverImage": "/media/gallery/Economic-Growth-1708501307086-117483698.jpg",
        "name": "Economic Growth",
        "description": "Technology education fuels economic growth by training individuals with essential skills for the digital era. Proficient tech skills in the workforce drive innovation, attract investments, and stimulate entrepreneurship, leading to sustained economic development and global competitiveness.",
        "createdAt": "2024-02-21T07:34:26.621Z",
        "updatedAt": "2024-02-21T07:41:47.148Z",
        "pageId": "cedc3a05-0379-4ad7-9632-0f65a8c452fe"
    },
    {
        "id": "acefa168-bb8a-48ca-a6c1-048d068fc7cf",
        "coverImage": "/media/gallery/Innovation-1708501463984-873143834.jpg",
        "name": "Innovation",
        "description": "Technology education helps in fostering innovation across vital sectors like healthcare, education, agriculture, and the environment. By training individuals, it cultivates a culture of innovation, fostering entrepreneurship, encouraging startups, and contributing to sustainable growth.",
        "createdAt": "2024-02-21T07:39:39.091Z",
        "updatedAt": "2024-02-21T07:44:24.041Z",
        "pageId": "cedc3a05-0379-4ad7-9632-0f65a8c452fe"
    },
    {
        "id": "0de56cde-7f25-4fd5-96e5-6f6b44f26d59",
        "coverImage": "/media/gallery/Retention-1708504700508-288570793.jpg",
        "name": "Retention",
        "description": "Implementing career development initiatives not only instills a sense of value among employees but also nurtures loyalty. This, in turn, leads to higher staff retention rates and a significant 59% reduction in turnover.",
        "createdAt": "2024-02-21T08:33:03.878Z",
        "updatedAt": "2024-02-21T08:38:20.545Z",
        "pageId": "c2fd213c-4d0a-430c-b459-e56733db0e4c"
    },
    {
        "id": "fda0fe6b-0210-463b-9616-2d0c829b4ed4",
        "coverImage": "/media/gallery/Innovation-1708501463984-873143834.jpg",
        "name": "Innovation",
        "description": "Technology education helps in fostering innovation across vital sectors like healthcare, education, agriculture, and the environment. By training individuals, it cultivates a culture of innovation, fostering entrepreneurship, encouraging startups, and contributing to sustainable growth.",
        "createdAt": "2024-02-21T11:01:54.256Z",
        "updatedAt": "2024-02-21T11:01:54.256Z",
        "pageId": "252887f3-c0ad-4163-a60d-0adb8923891f"
    },
    {
        "id": "a08f0dea-cca4-4742-827e-cd6194a44869",
        "coverImage": "/media/gallery/Innovation-1708501463984-873143834.jpg",
        "name": "Innovation",
        "description": "Technology education helps in fostering innovation across vital sectors like healthcare, education, agriculture, and the environment. By training individuals, it cultivates a culture of innovation, fostering entrepreneurship, encouraging startups, and contributing to sustainable growth.",
        "createdAt": "2024-02-21T11:02:30.147Z",
        "updatedAt": "2024-02-21T11:02:30.147Z",
        "pageId": "1007a96d-1dd6-4cb6-8162-e458dcc81f8b"
    },
    {
        "id": "e21943c5-a75a-4f6a-808b-4716ce2c303c",
        "coverImage": "/media/gallery/Economic-Growth-1708501307086-117483698.jpg",
        "name": "Economic Growth",
        "description": "Technology education fuels economic growth by training individuals with essential skills for the digital era. Proficient tech skills in the workforce drive innovation, attract investments, and stimulate entrepreneurship, leading to sustained economic development and global competitiveness.",
        "createdAt": "2024-02-21T11:03:02.338Z",
        "updatedAt": "2024-02-21T11:03:02.338Z",
        "pageId": "1007a96d-1dd6-4cb6-8162-e458dcc81f8b"
    },
    {
        "id": "45796bd2-a49b-476f-9074-962e80824d91",
        "coverImage": "/media/gallery/Job-Creation-1708501424641-8605797.jpg",
        "name": "Job Creation",
        "description": "Proficiency in technology opens doors to high-paying, diverse employment opportunities, spanning industries that increasingly rely on digital innovation. As the demand for tech-savvy professionals continues to rise, technology education becomes a crucial driver for job creation.",
        "createdAt": "2024-02-21T11:03:28.956Z",
        "updatedAt": "2024-02-21T11:03:28.956Z",
        "pageId": "1007a96d-1dd6-4cb6-8162-e458dcc81f8b"
    },
    {
        "id": "22fe4243-1134-4665-afc7-1e847abf632b",
        "coverImage": "/media/gallery/Entrepreneurship-1708501380658-612058310.jpg",
        "name": "Entrepreneurship",
        "description": "Technology education drives entrepreneurship by empowering individuals with the skills to navigate the digital landscape. Proficiency in technology opens doors for innovative ventures, encourages a culture of problem-solving, and fosters the creation of tech-driven startups.",
        "createdAt": "2024-02-21T11:03:53.417Z",
        "updatedAt": "2024-02-21T11:03:53.417Z",
        "pageId": "1007a96d-1dd6-4cb6-8162-e458dcc81f8b"
    }
    ]
    // await queryInterface.bulkInsert('galleries',gallery)
    console.log('gallery data seeded successfully')

    const events=[
      {
        "id": "e1951218-9dc0-4dae-b63a-236b6901becb",
        "name": "The Tech Nexus: Where Innovation Meets Opportunity",
        "description": " Dive deep into the world of blockchain technology, cryptocurrency innovations, and decentralized finance solutions at our global summit.",
        "eventImage": "/media/event/Screenshot 2024-02-16 173312-1708411767469-501027171.png",
        "startDayTime": "2024-02-16T08:00:00.000Z",
        "endDayTime": "2024-02-16T17:00:00.000Z",
        "isFeatured": true,
        "createdAt": "2024-02-16T12:00:18.520Z",
        "updatedAt": "2024-02-20T06:49:27.582Z",
        "deletedAt": null,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83"
    },
    {
        "id": "19758821-cb1c-4b66-a989-0150edd97cb1",
        "name": "Tech Summit 2024",
        "description": "oin us for the premier technology summit of the year, featuring expert speakers and cutting-edge innovations.",
        "eventImage": "/media/event/Screenshot 2024-02-16 173302-1708411798873-6997990.png",
        "startDayTime": "2024-02-16T08:00:00.000Z",
        "endDayTime": "2024-02-16T17:00:00.000Z",
        "isFeatured": true,
        "createdAt": "2024-02-16T10:26:59.979Z",
        "updatedAt": "2024-02-20T06:49:58.907Z",
        "deletedAt": null,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83"
    },
    {
        "id": "e7362168-2ac6-49fd-bdf7-30536d9b4f1a",
        "name": " Global Summit on Blockchain Technology, Cryptocurrency Innovations, and Decentralized Finance Solutions",
        "description": " Dive deep into the world of blockchain technology, cryptocurrency innovations, and decentralized finance solutions at our global summit.",
        "eventImage": "/media/event/Screenshot 2024-02-16 173302-1708411817797-882449064.png",
        "startDayTime": "2024-02-16T08:00:00.000Z",
        "endDayTime": "2024-02-16T17:00:00.000Z",
        "isFeatured": true,
        "createdAt": "2024-02-16T10:28:26.678Z",
        "updatedAt": "2024-02-20T06:50:17.843Z",
        "deletedAt": null,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83"
    },
    {
        "id": "f71c94f5-f9f6-44c6-8065-023965a76eef",
        "name": "Data Science",
        "description": "Advanced techniques for analyzing and interpreting complex data sets.",
        "eventImage": "/media/event/Screenshot 2024-02-16 173302-1708411842908-582087592.png",
        "startDayTime": "2024-02-16T08:00:00.000Z",
        "endDayTime": "2024-02-16T17:00:00.000Z",
        "isFeatured": true,
        "createdAt": "2024-02-16T10:28:02.146Z",
        "updatedAt": "2024-02-20T06:50:43.059Z",
        "deletedAt": null,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83"
    },
    {
        "id": "a5679d11-3e08-4add-87ab-1bb0de04fd06",
        "name": " The Global Innovation Summit: Shaping Tomorrow's World",
        "description": " Dive deep into the world of blockchain technology, cryptocurrency innovations, and decentralized finance solutions at our global summit.",
        "eventImage": "/media/event/Black-Woman-using-Augmented-Reality-panel-1708422287116-414552410.jpeg",
        "startDayTime": "2024-02-16T08:00:00.000Z",
        "endDayTime": "2024-02-16T17:00:00.000Z",
        "isFeatured": true,
        "createdAt": "2024-02-16T11:59:36.407Z",
        "updatedAt": "2024-02-20T09:44:47.141Z",
        "deletedAt": null,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83"
    },
    {
        "id": "4e6defdf-652a-4bf9-b242-66a087b15c63",
        "name": "FutureTech Expo: Unveiling Tomorrow's Innovations",
        "description": " Dive deep into the world of blockchain technology, cryptocurrency innovations, and decentralized finance solutions at our global summit.",
        "eventImage": "/media/event/Black-Woman-using-Augmented-Reality-panel-1708422287116-414552410.jpeg",
        "startDayTime": "2024-02-16T08:00:00.000Z",
        "endDayTime": "2024-02-16T17:00:00.000Z",
        "isFeatured": true,
        "createdAt": "2024-02-16T11:59:55.171Z",
        "updatedAt": "2024-02-22T07:17:05.080Z",
        "deletedAt": null,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83"
    }
    ]
    // await queryInterface.bulkInsert('events',events,{})
    console.log('Events data seeded successfully')
    

    const blogCategory=[
        {
            "id": "70f738e0-934d-4351-ac01-6b69ba42e4ca",
            "name": "Acadamics",
            "createdAt": "2024-02-09T12:42:26.543Z",
            "updatedAt": "2024-02-09T12:42:26.543Z",
            "deletedAt": null
        },
        {
            "id": "7abc1d25-ee28-4584-8c92-9afc0b99b9ea",
            "name": "Acadamics 222",
            "createdAt": "2024-02-09T12:56:19.173Z",
            "updatedAt": "2024-02-09T12:56:19.173Z",
            "deletedAt": null
        }
    ]
    await queryInterface.bulkInsert('blog-categories',blogCategory,{})
    console.log('Blogs Categories added successfully')

    const blog =[
      {
        "id": "09831b0a-f384-4396-9edc-73af85681e14",
        "title": "Unlocking Lucrative Opportunities:ITCoursesinAI,ML,WebApps,Cloud,and Blockchain for Indonesians",
        "description": "This is a sample blog description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "blog_image": "/media/blog/Information-Technology-1708088285977-503098286.jpg",
        "is_featured": true,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-16T07:08:06.386Z",
        "updatedAt": "2024-02-16T12:51:42.775Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    },
    {
        "id": "aa21324e-507e-4737-a200-8fa2372fef33",
        "title": "Can an Information Technology University degree be the road to achieving the AmericanDream?",
        "description": "This is a sample blog description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "blog_image": "/media/blog/Economic-Growth-1708088150080-964617154.jpg",
        "is_featured": true,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-15T12:38:51.078Z",
        "updatedAt": "2024-02-16T12:55:50.159Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    },
    {
        "id": "0723da37-d507-4a20-8ffa-bd829a120dbf",
        "title": "How affordable University education helps individuals, organizations, and the economy",
        "description": "Affordable university education stands as a cornerstone of societal advancement, empowering individuals to unlock their full potential and pursue their dreams without the burden of financial constraints. By providing access to quality education, universities serve as catalysts for social mobility, allowing students to break free from the cycle of poverty and achieve upward economic mobility. Moreover, the acquisition of specialized knowledge and skills equips graduates with the tools they need to thrive in an increasingly competitive job market, enhancing their earning potential and long-term financial stability. Universities also fuel organizational growth by serving as incubators of talent, producing a diverse pool of skilled graduates ready to contribute to the workforce. Partnerships between universities and industry stakeholders facilitate research collaborations, technology transfer, and knowledge exchange, driving innovation and economic development. The benefits of affordable education extend beyond individual success stories to broader economic prosperity, as a well-educated workforce is essential for driving innovation, increasing productivity, and fostering entrepreneurship. By investing in higher education, governments can cultivate a skilled workforce capable of meeting the demands of emerging industries and driving technological advancements, leading to increased consumer spending, a stronger tax base, and economic growth. In conclusion, affordable university education is a powerful catalyst for individual empowerment, organizational growth, and economic prosperity, and it is essential to ensure its accessibility for all who seek it to build a more prosperous society for the future.",
        "blog_image": "/media/blog/Economic-Growth-1708082326610-624479333.jpg",
        "is_featured": true,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-15T12:33:48.056Z",
        "updatedAt": "2024-02-16T11:18:46.676Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    },
    {
        "id": "43154aea-2a71-4a28-9b4c-196ea3e5bcec",
        "title": "Mastering Data Science: A Practical Approach",
        "description": "Dive deep into the world of data science with our practical guide. Learn essential concepts, techniques, and tools used by data scientists to extract insights from data and make informed decisions. Whether you're a beginner or an experienced professional, this guide will help you enhance your skills and advance your career in data science.",
        "blog_image": "/media/blog/motivational-composition-goal-achievement_23-2150490032-1708088757175-875984100.jpg",
        "is_featured": false,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-16T13:04:07.829Z",
        "updatedAt": "2024-02-16T13:05:57.212Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    },
    {
        "id": "53bebbcd-d190-482c-b71c-7fd65db7ee36",
        "title": "The Art of Photography: Capturing Moments in Time",
        "description": "Discover the artistry and magic of photography. From capturing breathtaking landscapes to candid portraits, photography allows us to freeze moments in time and immortalize memories. Join us as we explore the techniques, equipment, and creativity behind great photography.",
        "blog_image": "/media/blog/college-savings-concept_700248-1580-1708089187419-672654493.jpg",
        "is_featured": false,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-16T13:07:45.790Z",
        "updatedAt": "2024-02-16T13:13:07.484Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    },
    {
        "id": "9cf9f3af-d9ed-4f0e-8512-7a46ad1555e1",
        "title": "Exploring the Cosmos: A Journey Through Space",
        "description": "Embark on an awe-inspiring journey through the cosmos. From distant galaxies to mysterious black holes, join us as we explore the wonders of the universe and uncover the secrets of space exploration. Get ready for an adventure of cosmic proportions!",
        "blog_image": "/media/blog/college-savings-concept_700248-1580-1708089245264-786064872.jpg",
        "is_featured": false,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-16T13:11:14.304Z",
        "updatedAt": "2024-02-16T13:14:05.320Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    },
    {
        "id": "e0d49591-061d-4cd9-9897-542440587035",
        "title": "The Art of Photography: Capturing Moments in Time",
        "description": "Discover the artistry and magic of photography. From capturing breathtaking landscapes to candid portraits, photography allows us to freeze moments in time and immortalize memories. Join us as we explore the techniques, equipment, and creativity behind great photography.",
        "blog_image": "/media/blog/person-using-ai-tool-job (1)-1708089285485-722373932.jpg",
        "is_featured": false,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-16T13:09:31.660Z",
        "updatedAt": "2024-02-16T13:14:45.582Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    },
    {
        "id": "42f3a64f-bf66-4199-8d9a-756e888e28b6",
        "title": "Mastering Data Science: A Practical Approach",
        "description": "Dive deep into the world of data science with our practical guide. Learn essential concepts, techniques, and tools used by data scientists to extract insights from data and make informed decisions. Whether you're a beginner or an experienced professional, this comprehensive guide will help you enhance your skills and advance your career in data science.",
        "blog_image": "/media/blog/person-using-ai-tool-job (1)-1708089307178-351242411.jpg",
        "is_featured": false,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-16T13:08:48.597Z",
        "updatedAt": "2024-02-16T13:15:07.236Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    },
    {
        "id": "c91bb661-2b10-43a9-8404-4f3765dfc1de",
        "title": "Unveiling the Future of Technology",
        "description": "In the fast-paced realm of technology, staying ahead of the curve is paramount. Welcome to TechGuru Chronicles, your go-to destination for all things tech-related, where we delve deep into the realms of innovation, cutting-edge advancements, and the transformative power of technology shaping our world. Join us on an exhilarating journey through the digital landscape as we explore the latest trends in artificial intelligence, machine learning, augmented reality, virtual reality, blockchain, and beyond. Our expert team of writers and tech enthusiasts are dedicated to uncovering the hidden gems of the tech world, providing insightful analysis, and offering expert commentary on the most pressing issues facing the industry today. From groundbreaking startups disrupting traditional industries to the latest gadgets and gizmos making waves in the consumer market, TechGuru Chronicles is your ultimate guide to navigating the ever-evolving tech ecosystem. Whether you're a seasoned tech aficionado or just dipping your toes into the world of technology, our comprehensive coverage caters to all levels of expertise, ensuring that everyone can stay informed and inspired. But we're more than just a source of news and information. TechGuru Chronicles is a community of like-minded individuals passionate about pushing the boundaries of what's possible with technology. Join the conversation, share your insights, and connect with fellow tech enthusiasts from around the globe as we collectively chart the course towards a brighter, more innovative future. So, whether you're eager to learn about the latest breakthroughs in artificial intelligence, explore the potential of blockchain technology, or simply geek out over the newest gadgets hitting the market, TechGuru Chronicles has you covered. Get ready to unlock the secrets of tomorrow and embark on a journey of discovery with us. The future of technology awaits – let's explore it together.",
        "blog_image": "/media/blog/motivational-composition-goal-achievement_23-2150490032-1708421898576-209284664.jpg",
        "is_featured": false,
        "created_by_id": "c28512ff-aa8a-4ff3-ada8-fce8f8164f83",
        "createdAt": "2024-02-16T06:50:39.612Z",
        "updatedAt": "2024-02-20T09:38:18.602Z",
        "deletedAt": null,
        "blog_category_id": "70f738e0-934d-4351-ac01-6b69ba42e4ca"
    }
    ] 
    await queryInterface.bulkInsert('blogs',blog,{})
    console.log('Blogs data added successfully')

  },
}