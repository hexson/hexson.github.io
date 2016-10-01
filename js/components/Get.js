import $ from 'jquery';
import marked from 'marked';
import React, { Component } from 'react';


import { BASE } from '../constants/Base.js';
import Loading from '../components/Loading.js';


export default class Get extends Component {
	constructor (props){
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: null
		}
	}
	componentDidMount (){
		$.ajax({
			url: `https://api.github.com/repos/${BASE.master}/${BASE.master}.github.io/issues`,
			data: {
				filter: this.props.filter || 'created',
				per_page: this.props.perpage || 10,
				page: this.props.page || 1
			},
			success: result => {
				this.setState({
					loading: false,
					data: result
				});
				this.props.callback(!!result.length);
			},
			error: msg => {
				this.setState({
					loading: false,
					error: msg
				})
			}
		})
		/*
		console.log('ajax success.');
		let data = [{"url":"https://api.github.com/repos/hexson/hexson.github.io/issues/1","repository_url":"https://api.github.com/repos/hexson/hexson.github.io","labels_url":"https://api.github.com/repos/hexson/hexson.github.io/issues/1/labels{/name}","comments_url":"https://api.github.com/repos/hexson/hexson.github.io/issues/1/comments","events_url":"https://api.github.com/repos/hexson/hexson.github.io/issues/1/events","html_url":"https://github.com/hexson/hexson.github.io/issues/1","id":179461988,"number":1,"title":"Blog の始","user":{"login":"hexson","id":16832957,"avatar_url":"https://avatars.githubusercontent.com/u/16832957?v=3","gravatar_id":"","url":"https://api.github.com/users/hexson","html_url":"https://github.com/hexson","followers_url":"https://api.github.com/users/hexson/followers","following_url":"https://api.github.com/users/hexson/following{/other_user}","gists_url":"https://api.github.com/users/hexson/gists{/gist_id}","starred_url":"https://api.github.com/users/hexson/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/hexson/subscriptions","organizations_url":"https://api.github.com/users/hexson/orgs","repos_url":"https://api.github.com/users/hexson/repos","events_url":"https://api.github.com/users/hexson/events{/privacy}","received_events_url":"https://api.github.com/users/hexson/received_events","type":"User","site_admin":false},"labels":[{"url":"https://api.github.com/repos/hexson/hexson.github.io/labels/%E6%9D%82%E6%96%87","name":"杂文","color":"f9d0c4"}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2016-09-27T11:02:06Z","updated_at":"2016-09-28T17:17:20Z","closed_at":null,"body":"前段时间一直在忙，很多事情在日程上没时间去做，构建一个自己blog也是其中之一，之前有写些随笔的习惯，不过大部分流落各处，现在想重拾起来，不管是随笔、总结又或是技术各种，留下点回忆和记录。\r\n\r\n### 构想\r\n构想总是大胆又天马行空的，想过很多种方式去做，有想过基于nodeJs为后台，AngularJs为前台，然后自己写了各种的模块，Validator、Api...，最后的最后，发现比较费时间，还有备案等问题，后来看到很多用 **hexo** 搭建的blog，去官网看了一下有一些主题可供选择，但是到后面没想过用这个去搭建一个blog，很多原因说不上来，看了好几个这类的blog，傻傻分不清。\r\n\r\n### 构建\r\n一个偶然的情况下在知乎上面看到了关于blog的问题，有一个回答里面讲了一些 **Github Issues** 的东西，当时看下去越觉得很有趣，原来还可以这么玩，新的东西让我有点兴奋了，后来脑子里有了个大概的想法：通过 **Github Issues** 和 **git push** ，单页blog，文章不用去写文件储存，而且这样我随便来个电脑都能进行coding和commits，很好。\r\n\r\n### 技术栈\r\n前端框架想过很多，上面也提到了AngularJs，目前公司是用这个贯穿整个前端的架构，有一些历史和文化的原因，最后觉得blog很多模块用不上，就抛弃了他 >_<\r\n\r\n开发使用了\r\n\r\n- **react@15.3.2**\r\n- **react-router@2.8.1**\r\n- **less@2.7.1**\r\n- **jquery@1.11.1**\r\n- **grunt@1.0.1**\r\n- **es6**\r\n- **etc...**\r\n\r\n### 最后\r\n平常很少上知乎，这次由知乎得益一些启发。\r\n当然并不是推崇什么，各人看法不同，不过我觉得对人和事物存着敬畏的心态，才有所得。\r\n于是乎，就有了这个blog。"}];
		data[1] = {};
		data[1].title = data[0].title + 2;
		data[1].labels = data[0].labels;
		data[1].created_at = data[0].created_at;
		data[1].body = data[0].body;
		data[2] = {};
		data[2].title = data[0].title + 3;
		data[2].labels = data[0].labels;
		data[2].created_at = data[0].created_at;
		data[2].body = data[0].body;
		data[3] = {};
		data[3].title = data[0].title + 4;
		data[3].labels = data[0].labels;
		data[3].created_at = data[0].created_at;
		data[3].body = data[0].body;
		let arr = this.props.page==1 ? data.slice(0,2) : this.props.page==2 ? data.slice(2) : [];
		this.setState({
			loading: false,
			data: arr
		});
		console.log(arr,!!arr.length)
		this.props.callback(!!arr.length);
		*/
	}
	reload (){
		window.location.reload();
	}
	render (){
		if (this.state.loading){
			return (
				<Loading />
			)
		}else if (this.state.error !== null){
			return (
				<div>
					<span className="lh18 block f16 mb15">阿哦出错了</span>
					<span className="reload f14" onClick={this.reload}>重新加载</span>
				</div>
			)
		}else {
			return (
				<div>
					{
						this.state.data.map((v,i) => 
							<div className="list" key={i}>
								<h3 className="list-title mb15 f20">{v.title}</h3>
								<div className="mb30">
									<span className="list-time">{v.created_at.substr(0,10)}</span>
									{
										v.labels.map((val,ix) => 
											<a key={ix} className="list-tag" style={{backgroundColor: '#'+val.color}}>{val.name}</a>
										)
									}
								</div>
								<div className="list-view mb30 f16">
									{
										marked(v.body).substr(0,marked(v.body).match(/\n/)['index']).replace(/\<(\/p|p)\>/g,'')
									}
								</div>
								<a className="f14">更多 +</a>
							</div>
						)
					}
				</div>
			)
		}
	}
}