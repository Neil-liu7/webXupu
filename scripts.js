// --- Global Constants & Mobile Menu Toggle ---
const INITIAL_DISPLAY_COUNT = 3; // Number of items to show initially in achievement categories
const mobileMenu = document.getElementById('mobile-menu');
const mainNav = document.getElementById('main-nav');

mobileMenu.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Close any open detail overlays
        document.getElementById('member-detail-overlay').classList.remove('active');
        document.getElementById('achievement-detail-overlay').classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

// --- Member Data & Detail Logic ---
const membersData = {
    "member-detail-wang": {
        name: "王教授",
        role: "工作站站长 / 乡村发展专家",
        phase: "第一期实践支队",
        photo: "https://via.placeholder.com/200/7f8c8d/ffffff?text=王教授头像",
        bio: "王教授是清华大学乡村振兴领域的资深专家，拥有超过20年的农村发展研究与实践经验。他致力于理论与实践相结合，推动多学科交叉研究，为溆浦工作站的战略规划和项目落地提供了核心指导。王教授尤其关注乡村产业的生态化发展和人才培育，多次深入基层，与村民面对面交流，深受当地群众的信任与爱戴。在担任工作站站长期间，他领导团队成功孵化了多个示范项目，为溆浦地区的经济社会发展注入了新活力。",
        contact: {
            email: "wanglaoshi@tsinghua.edu.cn",
            wechat: "WangJiaoshouWX",
        }
    },
    "member-detail-li": {
        name: "李老师",
        role: "指导老师 / 建筑学院",
        phase: "第一期 & 第二期实践支队",
        photo: "https://via.placeholder.com/200/bdc3c7/ffffff?text=李老师头像",
        bio: "李老师是清华大学建筑学院的青年骨干教师，专注于乡村建筑设计与改造、历史村落保护等领域。她以其创新的设计理念和对传统文化的深刻理解，为溆浦村的建筑风貌提升和人居环境改善提供了专业支持。李老师多次带领学生团队驻扎乡村，亲手参与设计和建造，将学术研究转化为实际成果，赢得了广泛赞誉。她积极推动绿色建筑技术在乡村的应用，助力溆浦村走上可持续发展之路。",
        contact: {
            email: "lilaoshi@tsinghua.edu.cn",
        }
    },
    "member-detail-zhang": {
        name: "张明",
        role: "核心成员 / 研究生",
        phase: "第二期实践支队",
        photo: "https://via.placeholder.com/200/95a5a6/ffffff?text=张明头像",
        bio: "张明是清华大学公共管理学院的优秀研究生，在溆浦工作站主要负责社会调研、数据分析和报告撰写工作。他具备扎实的理论基础和严谨的科研态度，对乡村治理和政策执行有着独到的见解。在溆浦的实践中，张明积极参与村民访谈，收集一手资料，为工作站的决策提供了重要依据。他善于沟通协调，是团队中不可或缺的桥梁。",
        contact: {
            email: "zhangming@example.com",
        }
    },
    "member-detail-chen": {
        name: "陈芳",
        role: "核心成员 / 本科生",
        phase: "第一期实践支队",
        photo: "https://via.placeholder.com/200/c1c1c1/ffffff?text=陈芳头像",
        bio: "陈芳是清华大学美术学院的本科生，在工作站主要负责宣传材料设计、视觉呈现和文化创意工作。她将艺术设计与乡村振兴相结合，通过海报、文创产品、短视频等多种形式，生动展现溆浦的乡村魅力和发展成果。陈芳富有创意和执行力，她的作品不仅美观大方，更能有效地传播乡村振兴理念，激发村民的参与热情。她在团队中是名副其实的“美学担当”。",
        contact: {
            email: "chenfang@example.com",
        }
    },
    "member-detail-zhao": {
        name: "赵强",
        role: "志愿者代表",
        phase: "第二期实践支队",
        photo: "https://via.placeholder.com/200/888888/ffffff?text=赵强头像",
        bio: "赵强是清华大学热心公益事业的本科生，作为志愿者代表，他积极参与溆浦工作站的各项活动。他主要负责现场协调、活动组织和村民服务工作。赵强为人热情开朗，乐于助人，与村民建立了深厚的友谊。他在实践中锻炼了组织协调能力和解决问题的能力，对乡村生活有了更深刻的认识。他认为，青年力量是乡村振兴不可或缺的一部分。",
        contact: {
            email: "zhaoqiang@example.com",
        }
    }
};

const memberDetailOverlay = document.getElementById('member-detail-overlay');
const memberDetailCard = document.getElementById('member-detail-card');
const backToMembersLink = document.getElementById('back-to-members-link');

// Function to render member details
function renderMemberDetail(memberId) {
    const member = membersData[memberId];
    if (!member) {
        console.error("Member not found:", memberId);
        return;
    }

    memberDetailCard.innerHTML = `
      <div class="member-detail-photo">
        <img src="${member.photo}" alt="${member.name}头像">
      </div>
      <h3>${member.name}</h3>
      <p class="detail-role">${member.role}</p>
      <p class="member-phase-tag">${member.phase}</p>
      <p class="detail-bio">${member.bio}</p>
      <div class="contact-info">
        ${member.contact.email ? `<a href="mailto:${member.contact.email}">邮箱: ${member.contact.email}</a>` : ''}
        ${member.contact.wechat ? `<span>微信: ${member.contact.wechat}</span>` : ''}
        ${member.contact.phone ? `<span>电话: ${member.contact.phone}</span>` : ''}
        ${member.contact.linkedin ? `<a href="https://linkedin.com/in/${member.contact.linkedin}" target="_blank">LinkedIn</a>` : ''}
        ${member.contact.weibo ? `<a href="https://weibo.com/${member.contact.weibo}" target="_blank">微博</a>` : ''}
        ${member.contact.portfolio ? `<a href="${member.contact.portfolio}" target="_blank">个人主页</a>` : ''}
      </div>
    `;
}

// Handle member card clicks
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('click', function (e) {
        e.preventDefault();
        const memberId = this.getAttribute('href').substring(1); // Get ID from href
        renderMemberDetail(memberId);
        memberDetailOverlay.classList.add('active');
        history.pushState(null, '', `#${memberId}`); // Update URL hash
    });
});

// Handle closing member detail overlay
backToMembersLink.addEventListener('click', function(e) {
    e.preventDefault();
    memberDetailOverlay.classList.remove('active');
    history.pushState(null, '', '#members'); // Restore #members hash
});

memberDetailOverlay.addEventListener('click', function(e) {
    if (e.target === memberDetailOverlay) { // Only close if clicking outside the content
        memberDetailOverlay.classList.remove('active');
        history.pushState(null, '', '#members'); // Restore #members hash
    }
});

// --- Achievement Data & Detail Logic ---
const achievementsData = {
    "achievement-detail-project-1": {
        title: "溆浦村文化广场改造项目",
        date: "2024年05月10日",
        phase: "第一期",
        description: "本期项目聚焦溆浦村核心区域的公共空间提升，对老旧文化广场进行全面规划设计与施工监督。通过引入本地文化元素，优化绿化景观，增设便民设施（如休息座椅、健身器材），有效提升了村民的休闲娱乐品质，成为乡村社区的新亮点。项目过程中，我们积极听取村民意见，确保设计符合实际需求，并组织了多次现场协调会，保障施工质量和进度。该项目的成功落地，显著改善了村容村貌，增强了村民的幸福感和凝聚力。",
        tags: ["乡村建设", "文化提升", "民生工程"],
        image: "https://via.placeholder.com/700x350/9b59b6/ffffff?text=Culture+Square+Full+Detail",
        video: "" // Can add video URL here
    },
    "achievement-detail-project-2": {
        title: "农产品品牌孵化与电商平台搭建",
        date: "2024年03月22日",
        phase: "第二期",
        description: "针对溆浦村特色农产品缺乏市场竞争力和销售渠道的问题，工作站开展了为期半年的品牌孵化与电商平台搭建项目。我们协助农户对当地优质农产品（如溆浦蜜橘、土蜂蜜）进行标准化包装设计，注册了“溆浦优选”品牌。同时，通过电商培训、直播带货指导等方式，帮助农户在主流电商平台开设店铺，拓展线上销售渠道。目前，“溆浦优选”已初见成效，有效提升了农产品的附加值和村民收入。",
        tags: ["产业发展", "扶贫项目", "电商助农", "品牌建设"],
        image: "https://via.placeholder.com/700x350/3498db/ffffff?text=E-commerce+Platform+Detail",
        video: ""
    },
    "achievement-detail-project-3": {
        title: "乡村民宿示范点改造工程",
        date: "2023年11月18日",
        phase: "第一期",
        description: "为探索乡村旅游新模式，工作站选择溆浦村一处闲置民居进行现代化改造，打造成为具有当地特色、符合现代游客需求的乡村民宿样板。设计团队保留了传统建筑的韵味，同时融入了环保材料和智能家居系统，提升了居住舒适度。改造完成后，该民宿作为示范点，吸引了周边地区游客，并为其他村民提供了民宿改造的借鉴经验，带动了乡村旅游产业的初步发展。",
        tags: ["旅游开发", "增收", "乡村建设", "样板示范"],
        image: "https://via.placeholder.com/700x350/2ecc71/ffffff?text=Homestay+Project+Detail",
        video: ""
    },
    "achievement-detail-project-4": {
        title: "溆浦村饮水安全提升工程",
        date: "2023年09月05日",
        phase: "第二期",
        description: "鉴于溆浦村部分区域存在供水设施老旧、水质不稳定的问题，工作站组织实施了饮水安全提升工程。项目包括对老旧管网的更换、新建小型净水设施以及水源地的保护与监测。通过与当地水务部门合作，确保了工程的科学性和可持续性。该工程的完成，从根本上改善了村民的饮水质量，保障了村民的身体健康，是重要的民生保障项目。",
        tags: ["民生改善", "基础设施", "水利", "乡村建设"],
        image: "https://via.placeholder.com/700x350/e74c3c/ffffff?text=Water+Safety+Detail",
        video: ""
    },
    "achievement-detail-project-5": {
        title: "青少年乡村研学基地建设",
        date: "2023年07月10日",
        phase: "第一期",
        description: "充分利用溆浦村独特的自然风光和乡土文化资源，工作站规划并协助建设了一处青少年乡村研学基地。基地设计注重教育性、互动性和安全性，包含了农耕体验区、自然课堂、传统手工坊等多个功能区。此项目的建成，不仅为青少年提供了亲近自然、了解乡村的实践平台，也为溆浦村带来了新的客源，促进了文旅产业的融合发展。",
        tags: ["教育帮扶", "文旅融合", "青少年", "社会实践"],
        image: "https://via.placeholder.com/700x350/f39c12/ffffff?text=Youth+Study+Base+Detail",
        video: ""
    },
    "achievement-detail-design-1": {
        title: "溆浦村全域旅游景观规划",
        date: "2024年01月15日",
        phase: "第二期",
        description: "为推动溆浦村旅游业的全面发展，工作站编制了《溆浦村全域旅游景观规划》。该规划从宏观层面梳理了村庄的生态本底和文化资源，提出了“一核两带多节点”的旅游空间布局。详细设计了主要景点提升方案、生态游线规划、旅游标识系统以及配套服务设施布局等，旨在构建系统化、品牌化的乡村旅游目的地。规划方案获得了当地政府的高度认可，并逐步进入实施阶段。",
        tags: ["旅游规划", "生态设计", "乡村旅游", "景观设计"],
        image: "https://via.placeholder.com/700x350/e67e22/ffffff?text=Tourism+Plan+Detail",
        video: ""
    },
    "achievement-detail-design-2": {
        title: "乡土建筑改造设计导则",
        date: "2023年09月01日",
        phase: "第一期",
        description: "针对溆浦地区乡土建筑保护与更新的实际需求，工作站专家团队深入调研，编制了《溆浦地区乡土建筑改造设计导则》。该导则明确了传统建筑的保护原则、修缮技术要点、新建筑的风格要求和材料选用建议，旨在指导村民在房屋改造过程中，既满足现代生活需求，又能保留乡土特色和文化基因，避免千篇一律的现代化改造。导则已在当地广泛推广，成为村民改造房屋的重要参考。",
        tags: ["建筑设计", "文化传承", "乡村规划", "保护与更新"],
        image: "https://via.placeholder.com/700x350/f1c40f/ffffff?text=Architecture+Guide+Detail",
        video: ""
    },
    "achievement-detail-design-3": {
        title: "溆浦村公共空间艺术介入方案",
        date: "2024年03月01日",
        phase: "第二期",
        description: "为提升溆浦村的艺术氛围和公共空间品质，设计团队提出了公共空间艺术介入方案。该方案结合溆浦的自然风光和农耕文化，设计了一系列具有地方特色的雕塑、壁画和装置艺术。这些艺术作品不仅美化了村庄环境，也成为了村民和游客拍照打卡的亮点，增强了乡村的吸引力和文化软实力。艺术介入项目还鼓励村民参与创作，促进了社区共建。",
        tags: ["公共艺术", "空间活化", "美学提升", "社区共建"],
        image: "https://via.placeholder.com/700x350/34495e/ffffff?text=Art+Intervention+Detail",
        video: ""
    },
    "achievement-detail-promotion-1": {
        title: "《溆浦乡村振兴纪实》系列短视频发布",
        date: "2023年07月20日",
        phase: "第一期",
        description: "为全面展现清华大学溆浦乡村振兴工作站的实践成果和溆浦村庄的变化，团队制作并发布了《溆浦乡村振兴纪实》系列短视频。视频以生动的镜头语言，记录了项目从调研到落地的全过程，以及村民生活的改善。系列视频在各大社交媒体平台发布后，获得了大量关注和点赞，有效提升了工作站的社会影响力，并激发了更多人关注乡村振兴。",
        tags: ["媒体传播", "品牌建设", "影像记录", "社会影响力"],
        image: "https://via.placeholder.com/700x350/c0392b/ffffff?text=Video+Series+Detail",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video URL
    },
    "achievement-detail-promotion-2": {
        title: "“清华与溆浦”主题展览在校内展出",
        date: "2023年05月12日",
        phase: "第一期",
        description: "为向校内外师生及社会各界展示溆浦工作站的实践成果，我们精心策划了“清华与溆浦”主题展览。展览通过图片、文字、模型、视频等多种形式，系统介绍了溆浦的历史文化、工作站的介入模式、具体项目成果以及村民受益情况。展览期间，吸引了大量参观者，增进了公众对乡村振兴的理解和支持，也为清华学子提供了了解国情、服务社会的机会。",
        tags: ["校际交流", "社会影响", "展览展示", "公众教育"],
        image: "https://via.placeholder.com/700x350/8e44ad/ffffff?text=Exhibition+Detail",
        video: ""
    },
    "achievement-detail-promotion-3": {
        title: "溆浦乡村振兴主题宣传册制作与发行",
        date: "2024年04月10日",
        phase: "第二期",
        description: "为了更系统、更直观地对外推广溆浦乡村振兴的经验和模式，工作站设计并制作了精美的宣传册。宣传册内容涵盖工作站简介、核心理念、代表项目案例、社会效益以及未来展望。通过图文并茂的形式，生动讲述了溆浦的故事。宣传册已在各类对外交流活动中广泛发行，成为展示溆浦形象、吸引外部资源的重要媒介。",
        tags: ["形象塑造", "旅游推广", "印刷品", "对外宣传"],
        image: "https://via.placeholder.com/700x350/16a085/ffffff?text=Brochure+Detail",
        video: ""
    },
    "achievement-detail-report-1": {
        title: "溆浦村社会经济发展现状调研报告",
        date: "2024年04月01日",
        phase: "第一期",
        description: "本报告是对溆浦村社会经济发展现状进行的全面深入调研成果。报告详细分析了溆浦村的人口结构、劳动力分布、主要产业构成、村民收入来源与水平、土地利用情况以及教育、医疗、交通等公共服务设施现状。通过实地走访、问卷调查、数据统计等多种方法，客观呈现了溆浦村发展的基础条件与面临的挑战，为后续制定精准帮扶策略提供了科学依据。",
        tags: ["数据分析", "发展评估", "社会调研", "经济分析"],
        image: "https://via.placeholder.com/700x350/1abc9c/ffffff?text=Economic+Report+Detail",
        video: ""
    },
    "achievement-detail-report-2": {
        title: "溆浦地区特色农产品市场潜力分析报告",
        date: "2023年10月25日",
        phase: "第二期",
        description: "为助力溆浦地区农产品实现市场化、品牌化发展，本报告对当地特色农产品（如脐橙、茶叶、竹笋等）进行了深入的市场潜力分析。报告内容包括：目标市场研究、消费者需求分析、竞争对手状况、产品优势与劣势评估以及销售渠道拓展策略。基于详实的数据和案例分析，报告提出了针对性的品牌建设、营销推广和产业链延伸建议，为当地农业产业升级提供了重要参考。",
        tags: ["市场研究", "农业发展", "产业升级", "商业分析"],
        image: "https://via.placeholder.com/700x350/34495e/ffffff?text=Agriculture+Report+Detail",
        video: ""
    },
    // New data for Leader Visits and Other Achievements
    "achievement-detail-visit-1": {
        title: "清华大学校领导实地调研工作站",
        date: "2024年06月01日",
        phase: "第三期",
        description: "清华大学校领导一行深入溆浦工作站，实地考察乡村振兴项目的进展情况，听取工作站成员的汇报，并对工作站的实践成果给予了高度肯定。校领导强调了高校服务国家战略、助力乡村振兴的重要意义，并鼓励工作站继续发挥专业优势，为溆浦地区的发展提供智力支持。",
        tags: ["校方支持", "实地考察", "教育帮扶", "领导关怀"],
        image: "https://via.placeholder.com/700x350/34495e/ffffff?text=Leader+Visit+Detail+1",
        video: ""
    },
    "achievement-detail-visit-2": {
        title: "省市领导考察溆浦乡村振兴成果",
        date: "2024年05月20日",
        phase: "第三期",
        description: "湖南省和怀化市相关领导莅临溆浦村，现场调研清华大学乡村振兴工作站的多个落地项目，包括文化广场和民宿示范点。领导们对工作站的专业能力和务实作风表示赞赏，并就如何将项目成果与地方发展规划紧密结合提出了具体要求，强调了政校合作在乡村振兴中的关键作用。",
        tags: ["政策指导", "政府合作", "实地考察", "社会影响"],
        image: "https://via.placeholder.com/700x350/2ecc71/ffffff?text=Leader+Visit+Detail+2",
        video: ""
    },
    "achievement-detail-other-1": {
        title: "溆浦乡村振兴工作站项目手册",
        date: "2024年04月15日",
        phase: "第二期",
        description: "为了系统地梳理和分享工作站的实践经验，我们编制了《溆浦乡村振兴工作站项目手册》。手册详细介绍了各期项目的背景、目标、实施过程、创新点和成效评估，并收录了大量的图文资料和数据分析。该手册不仅是工作站内部的知识库，也为其他地区开展乡村振兴提供了宝贵的参考资料。",
        tags: ["成果总结", "知识分享", "项目管理", "出版物"],
        image: "https://via.placeholder.com/700x350/9b59b6/ffffff?text=Project+Handbook+Detail",
        video: ""
    },
    "achievement-detail-other-2": {
        title: "清华学子乡村振兴专题论坛",
        date: "2023年12月01日",
        phase: "第一期",
        description: "工作站联合清华大学相关院系，成功组织了“青年与乡村：清华学子乡村振兴专题论坛”。论坛邀请了多位专家学者、地方干部和学生代表，围绕乡村产业发展、人才回流、文化传承等议题展开深入研讨。此次论坛为青年学子参与乡村振兴搭建了交流平台，激发了更多创新思维，提高了公众对乡村振兴的关注度。",
        tags: ["学术交流", "论坛", "青年参与", "教育帮扶"],
        image: "https://via.placeholder.com/700x350/e74c3c/ffffff?text=Seminar+Detail",
        video: ""
    }
};


const achievementDetailOverlay = document.getElementById('achievement-detail-overlay');
const achievementDetailCard = document.getElementById('achievement-detail-card');
const backToAchievementsLink = document.getElementById('back-to-achievements-link');

// Function to render achievement details
function renderAchievementDetail(achievementId) {
    const achievement = achievementsData[achievementId];
    if (!achievement) {
        console.error("Achievement not found:", achievementId);
        return;
    }

    let tagsHtml = achievement.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    // Add specific tag classes if needed, for example, by checking tag content

    let mediaContent = '';
    if (achievement.image) {
        mediaContent += `<div class="detail-image-placeholder"><img src="${achievement.image}" alt="${achievement.title}图片"></div>`;
    }
    if (achievement.video) {
        // Basic embed for YouTube, can be expanded for other platforms
        mediaContent += `<div class="detail-image-placeholder" style="height: 350px;"><iframe width="100%" height="100%" src="${achievement.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    }


    achievementDetailCard.innerHTML = `
      <h3>${achievement.title}</h3>
      <p class="detail-date-phase">
        发布日期：${achievement.date}
        ${achievement.phase ? ` / <span class="project-phase">${achievement.phase}</span>` : ''}
      </p>
      ${mediaContent}
      <p class="detail-description">${achievement.description}</p>
      <div class="detail-tags">${tagsHtml}</div>
    `;
}

// Handle achievement item clicks
document.querySelectorAll('.achievement-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const achievementId = this.getAttribute('href').substring(1); // Get ID from href
        renderAchievementDetail(achievementId);
        achievementDetailOverlay.classList.add('active');
        history.pushState(null, '', `#${achievementId}`); // Update URL hash
    });
});

// Handle closing achievement detail overlay
// Note: Since we have multiple categories now, the back link should ideally go back to the top of the 'leader-visits' section if the achievement belongs there, or 'achievements' if it belongs there. For simplicity here, we'll revert to the standard practice of using the closest section ID in the URL for navigation.
backToAchievementsLink.addEventListener('click', function(e) {
    e.preventDefault();
    achievementDetailOverlay.classList.remove('active');

    // Check if the current hash corresponds to the newly added section
    const currentHash = window.location.hash;
    if (currentHash.startsWith('#achievement-detail-visit') || currentHash.startsWith('#achievement-detail-other')) {
        history.pushState(null, '', '#leader-visits');
    } else {
        history.pushState(null, '', '#achievements'); // Restore #achievements hash
    }
});

achievementDetailOverlay.addEventListener('click', function(e) {
    if (e.target === achievementDetailOverlay) { // Only close if clicking outside the content
        achievementDetailOverlay.classList.remove('active');

        const currentHash = window.location.hash;
        if (currentHash.startsWith('#achievement-detail-visit') || currentHash.startsWith('#achievement-detail-other')) {
            history.pushState(null, '', '#leader-visits');
        } else {
            history.pushState(null, '', '#achievements'); // Restore #achievements hash
        }
    }
});


// --- Expand/Collapse Logic for Achievement Categories and Members ---
function setupCollapsibleGrid(sectionElement, gridSelector, itemSelector) {
    const grid = sectionElement.querySelector(gridSelector);
    const items = Array.from(grid.querySelectorAll(itemSelector));
    const expandBtn = sectionElement.querySelector('.expand-btn');

    // Check if grid, button exist, and if there are more items than INITIAL_DISPLAY_COUNT
    if (!grid || !expandBtn || items.length <= INITIAL_DISPLAY_COUNT) {
        if (expandBtn) {
            expandBtn.style.display = 'none'; // Hide button if less than or equal to initial count
        }
        return;
    }

    // Initialize to collapsed state
    grid.classList.add('collapsed');
    expandBtn.textContent = '查看更多';

    expandBtn.addEventListener('click', () => {
        if (grid.classList.contains('collapsed')) {
            grid.classList.remove('collapsed');
            expandBtn.textContent = '收起';
        } else {
            grid.classList.add('collapsed');
            expandBtn.textContent = '查看更多';
            // Optional: Scroll back to the top of the category when collapsed
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Apply to Achievement Categories
document.querySelectorAll('.achievement-category').forEach(category => {
    setupCollapsibleGrid(category, '.achievement-grid', '.achievement-item');
});

// Apply to Members Section
const membersSection = document.getElementById('members');
if (membersSection) {
    setupCollapsibleGrid(membersSection, '.member-grid', '.member-card');
}


// --- Initial Hash Handling on Page Load ---
window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    if (hash.startsWith('#member-detail-')) {
        document.getElementById('achievement-detail-overlay').classList.remove('active'); // Close other overlay
        renderMemberDetail(hash.substring(1));
        memberDetailOverlay.classList.add('active');
    } else if (hash.startsWith('#achievement-detail-')) {
        document.getElementById('member-detail-overlay').classList.remove('active'); // Close other overlay
        renderAchievementDetail(hash.substring(1));
        achievementDetailOverlay.classList.add('active');
    } else if (hash === '#members' || hash === '#achievements' || hash === '#leader-visits' || hash === '') {
        memberDetailOverlay.classList.remove('active');
        achievementDetailOverlay.classList.remove('active');
    }
});

// Initial check on page load to open any deep-linked details
if (window.location.hash.startsWith('#member-detail-')) {
    renderMemberDetail(window.location.hash.substring(1));
    memberDetailOverlay.classList.add('active');
} else if (window.location.hash.startsWith('#achievement-detail-')) {
    renderAchievementDetail(window.location.hash.substring(1));
    achievementDetailOverlay.classList.add('active');
}