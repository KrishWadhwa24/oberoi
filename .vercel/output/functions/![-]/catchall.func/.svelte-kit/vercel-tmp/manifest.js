export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["a1.png","a10.png","a2.png","a3.png","a4.png","a5.png","a6.png","a7.png","a8.png","a9.png","cook.png","dining/a.png","dining/b.png","dining/c.png","dining/d.png","dining/e.png","dining/f.png","dining/g.png","dining/h.png","dining/i.png","dining/j.png","dining/k.png","dining/l.png","dining/m.png","dining/n.png","dining/o.png","favicon.png","im.png","image.png","img/4.png","img/Dining options 1.png","img/title.png","img/toc.png","logo.png","lp.png","obr1.png","obr2.png","obr3.png","obr4.png","obr5.png","obr6.png","palace.png","price1.png","spa.png","spa1.png","water.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CQVSRthr.js","app":"_app/immutable/entry/app.DQzYDJm6.js","imports":["_app/immutable/entry/start.CQVSRthr.js","_app/immutable/chunks/entry.Dpa02FTw.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/entry/app.DQzYDJm6.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.DoXM4yTu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contents",
				pattern: /^\/contents\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dining",
				pattern: /^\/dining\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/elevated",
				pattern: /^\/elevated\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/intro",
				pattern: /^\/intro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/shopping",
				pattern: /^\/shopping\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/sightseeing",
				pattern: /^\/sightseeing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/spa",
				pattern: /^\/spa\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
