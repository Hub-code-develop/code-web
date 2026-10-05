/* ============================================================
 * 语言使用状态数据（自动聚合，非手写）
 * 来源：GitHub Linguist 各仓库 languages 字节数，跨 Hub-code-develop
 *       组织下全部仓库累加，按使用频率（字节数）从高到低排序。
 * 已剔除反编译产物 IL Assembly / Assembly（.NET 运行时，非手写语言）。
 * 生成于 2026-10-05。
 * ============================================================ */

export interface LanguageStat {
  rank: number
  lang: string
  bytes: number
  pct: number
  repos: string[]
  color: string
}

export interface LanguageMeta {
  reposScanned: number
  languageCount: number
  generatedAt: string
  source: string
}

export const languageStats: LanguageStat[] = [{"rank": 1, "lang": "C#", "bytes": 434961076, "pct": 81.2, "repos": ["CodeHub-FluentUI", "CodeHub-OreUI", "CodeNet", "MCBEforMacOS-CodeHub", "MChub"], "color": "#68217A"}, {"rank": 2, "lang": "C++", "bytes": 52552154, "pct": 9.8, "repos": ["CodeNet", "MChub"], "color": "#f34b7d"}, {"rank": 3, "lang": "C", "bytes": 39626308, "pct": 7.4, "repos": ["CodeNet", "MChub"], "color": "#555555"}, {"rank": 4, "lang": "Visual Basic .NET", "bytes": 2139933, "pct": 0.4, "repos": ["CodeNet"], "color": "#945db7"}, {"rank": 5, "lang": "TypeScript", "bytes": 1068005, "pct": 0.2, "repos": ["CodeNet", "code-web"], "color": "#3178c6"}, {"rank": 6, "lang": "Python", "bytes": 974135, "pct": 0.2, "repos": ["CodeHub-OreUI", "CodeNet"], "color": "#3572A5"}, {"rank": 7, "lang": "Shell", "bytes": 826728, "pct": 0.2, "repos": ["CodeNet", "MCBEforMacOS-CodeHub", "MChub"], "color": "#89e051"}, {"rank": 8, "lang": "CMake", "bytes": 752505, "pct": 0.1, "repos": ["CodeNet"], "color": "#DA3434"}, {"rank": 9, "lang": "Roff", "bytes": 740588, "pct": 0.1, "repos": ["CodeNet"], "color": "#ecdebe"}, {"rank": 10, "lang": "XSLT", "bytes": 453872, "pct": 0.1, "repos": ["CodeNet"], "color": "#EB8CEB"}, {"rank": 11, "lang": "PowerShell", "bytes": 250357, "pct": 0.0, "repos": ["CodeNet", "MChub"], "color": "#012456"}, {"rank": 12, "lang": "Swift", "bytes": 217142, "pct": 0.0, "repos": ["CodeNet"], "color": "#F05138"}, {"rank": 13, "lang": "Yacc", "bytes": 157337, "pct": 0.0, "repos": ["CodeNet"], "color": "#4B6FBB"}, {"rank": 14, "lang": "Batchfile", "bytes": 154828, "pct": 0.0, "repos": ["CodeNet", "MChub"], "color": "#C1F12E"}, {"rank": 15, "lang": "Gnuplot", "bytes": 137573, "pct": 0.0, "repos": ["CodeNet"], "color": "#f0a9f6"}, {"rank": 16, "lang": "Objective-C", "bytes": 135947, "pct": 0.0, "repos": ["CodeNet"], "color": "#438eff"}, {"rank": 17, "lang": "JavaScript", "bytes": 131279, "pct": 0.0, "repos": ["CodeNet", "MChub"], "color": "#f1e05a"}, {"rank": 18, "lang": "Vue", "bytes": 91849, "pct": 0.0, "repos": ["CodeNet", "MChub", "code-web"], "color": "#41b883"}, {"rank": 19, "lang": "F#", "bytes": 73883, "pct": 0.0, "repos": ["CodeNet", "MChub"], "color": "#f3864b"}, {"rank": 20, "lang": "HTML", "bytes": 70147, "pct": 0.0, "repos": ["CodeNet", "MChub", "code-web"], "color": "#e34c26"}, {"rank": 21, "lang": "Makefile", "bytes": 32653, "pct": 0.0, "repos": ["CodeNet"], "color": "#427819"}, {"rank": 22, "lang": "Perl", "bytes": 31646, "pct": 0.0, "repos": ["CodeNet"], "color": "#0298c3"}, {"rank": 23, "lang": "Inno Setup", "bytes": 21019, "pct": 0.0, "repos": ["MChub"], "color": "#264b99"}, {"rank": 24, "lang": "CSS", "bytes": 19687, "pct": 0.0, "repos": ["CodeNet", "MChub", "code-web"], "color": "#563d7c"}, {"rank": 25, "lang": "Dockerfile", "bytes": 19221, "pct": 0.0, "repos": ["CodeNet"], "color": "#384d54"}, {"rank": 26, "lang": "Java", "bytes": 17553, "pct": 0.0, "repos": ["CodeNet"], "color": "#b07219"}, {"rank": 27, "lang": "DTrace", "bytes": 2861, "pct": 0.0, "repos": ["CodeNet"], "color": "#343995"}, {"rank": 28, "lang": "BitBake", "bytes": 2425, "pct": 0.0, "repos": ["CodeNet"], "color": "#00bce4"}, {"rank": 29, "lang": "Pawn", "bytes": 2256, "pct": 0.0, "repos": ["CodeNet"], "color": "#dbb284"}, {"rank": 30, "lang": "PHP", "bytes": 1690, "pct": 0.0, "repos": ["CodeNet"], "color": "#4F5D95"}, {"rank": 31, "lang": "ASP.NET", "bytes": 739, "pct": 0.0, "repos": ["CodeNet"], "color": "#9400ff"}, {"rank": 32, "lang": "Objective-C++", "bytes": 733, "pct": 0.0, "repos": ["CodeNet"], "color": "#6866fb"}]

export const languageMeta: LanguageMeta = {
  reposScanned: 7,
  languageCount: 32,
  generatedAt: '2026-10-05',
  source: 'GitHub Linguist · Hub-code-develop 组织全部仓库',
}
