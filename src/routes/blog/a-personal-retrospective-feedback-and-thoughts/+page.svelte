<script lang="ts">
	let { data } = $props();
	let { currentPost } = data;
	import Post from '$lib/components/molecules/Post.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
</script>

<Wrapper>
	<Post
		title={currentPost.title}
		coverImage={currentPost.coverImage}
		date={currentPost.date}
		contributor={currentPost.contributor}
		contributorSlug={currentPost.contributorSlug}
		tags={currentPost.tags}
		categories={currentPost.categories}
	>
		<p>
			This post is the retrospective and the personal feedback report I wrote to the management of
			Nautilus Cyberneering on my experience of working with Nautilus Cyberneering's team as an
			external contributor. I was given the opportunity to share it here on their corporate website.
			I am thankful for this and it proves to me again the organizations strive towards full
			transparency.
		</p>

		<p>
			Following, there are two sections in this post. I start of with the feedback I wrote and then
			I write about my contributions to give you a better overview of what I accomplished during my
			collaboration.
		</p>

		<p>
			In this post the reader will find a first section where I give my feedback and a second where
			I write about my contributions.
		</p>

		<h2>Part 1 - Feedback</h2>
		<h3>Personal Feedback</h3>
		<p>
			Through October 2020 to May 2022, I have worked on the projects for the group of people that
			now constitute Nautilus Cyberneering. Originally indirectly via Hyve Innovative Digital and
			now in a more direct way after the creation of the group.
		</p>

		<p>
			During this collaboration, several projects and Proof of Concepts were developed. We
			researched and had many discussions, both technical and philosophical.
		</p>

		<p>
			As a long-time external contributor to the company’s projects, I have taken the opportunity to
			share my experience, in the hope that it will be useful for all those who continue to be
			involved with the company, in particular the managers of the company.
		</p>

		<h3>General Feedback</h3>
		<p>Over the time that I have worked the Nautilus Cyberneering projects, I have:</p>

		<ul>
			<li>Improved my knowledge and skills on several topics and technologies.</li>
			<li>Felt productive and useful.</li>
			<li>
				Been interested, motivated and engaged for all the projects I have worked on (although, for
				obvious reasons, every project is different, and some have been more appealing than others).
			</li>
			<li>I have felt respected and valued as a team member.</li>
		</ul>

		<p>
			I also found some of the technical decisions, tasks and even projects surprising and sometimes
			even one-sided. If there had been better explanations and a more comprehensive decision-making
			process, it is likely that I would have felt more engaged, making it easier for me to adapt
			and take the new direction.
		</p>

		<p>
			The part that I probably liked the most is the company’s innovative approach to management and
			development. The approach of “openness” applied in every part of the organisation, not only in
			the code, is something really fresh that sets Nautilus apart from other companies. I believe
			that Nautilus should maintain this approach whenever possible.
		</p>

		<p>
			The pure development process was also a lot of fun, because of the “horizontality” with which
			Jose led it (he is a much more experienced programmer than me, but never took a position of
			superiority) and because of all the small, big and interesting challenges we had to overcome.
		</p>

		<p>
			The weekly meetings and roadmap helped to create an atmosphere of ‘high goals’, exploring
			advanced concepts and setting ambitious medium-term milestones. Although this was sometimes
			intimidating, it can be a real challenge for many developers who are tired of the typical
			standard projects.
		</p>

		<h3>Keep Doing</h3>
		<p>
			Below are the specific aspects of my cooperation that I personally liked more or that were
			more valuable for my personal development:
		</p>

		<ol>
			<li>The opportunity to learn and improve myself personally</li>
			<p>
				Some projects or functions required knowledge that I did not have. The management gave me
				the time I needed to acquire this knowledge and develop the necessary skills. Also, working
				with a small but diverse team with high qualifications in different areas was a really
				enriching experience.
			</p>
			<li>Motivation</li>
			<p>
				I felt that my work was valued and given feedback and was a useful contribution to a larger
				project.
			</p>
			<li>Confidence & Flexibility</li>
			<p>
				Sometimes it was really difficult to coordinate with other edataconsulting projects and my
				responsibilities as the father of a young child and his sudden and unexpected needs. At
				Nautilus I wasn’t forced to meet strict availability deadlines or rigid deadlines, which was
				helpful given my other personal and work commitments.
			</p>
			<li>Patience & Understanding</li>
			<p>
				Although I have years of experience, I am relatively new to some complex architectures and
				design patterns, as well as some workflows and methodologies that require a large repository
				of comprehension. The team didn’t put any pressure on me, and I was able to climb the
				learning curve smoothly.
			</p>
			<li>A Balance between Corporate Needs and Personal Satisfaction</li>
			<p>
				Occasionally, when I felt personally interested in some non-urgent aspects of development,
				such as creating a librarian logo or researching image metadata, when I asked for it, I was
				allowed to do so.
			</p>

			<p>
				Unusual and inspiring approach to development and corporate culture: One of the most
				attractive features of Nautilus Cyberneering is its unique corporate culture. More
				horizontal than many others, with a lot of autonomy given to team members and, of course,
				the already mentioned openness. All these aspects were extremely refreshing and stimulating.
			</p>

			<h3>What needs to be improved</h3>
			<p>
				The following are some aspects of the company’s operations that, in my opinion, could be
				improved. Obviously, I would not like them to be perceived as criticism, but simply as
				subjective feedback on procedures that could be corrected and optimised.
			</p>
		</ol>

		<ol>
			<li>Format of Meetings</li>
			<p>
				Sometimes weekly meetings prove tedious for me. For instance, when it comes to technical
				details, I find it really difficult to concentrate for more than 90 minutes, and often
				meetings last longer. It might be useful to have two weekly meetings or to stick to an
				agenda more strictly.
			</p>
			<li>A Volatile and Unpredictable Roadmap</li>
			<p>
				Although most of the time the ‘organic’ and flexible nature of the project was exciting and
				stimulating, sometimes I felt that some unexpected changes to the organisational roadmap
				meant discarding (or at least abandoning and not using) some of the previous work. In
				addition, my vision of the tasks ahead and the interim achievements had to be adjusted
				several times when priorities changed, and this caused me a certain sense of uncertainty.
			</p>
			<li>Some Hard Top-Down Decisions</li>
			<p>
				Sometimes I felt that some decisions or decisions discussed in the weeklies came
				“pre-cooked” and predetermined, and in some cases I would have preferred to be involved in
				the brainstorming, evaluation and decision-making process.
			</p>
		</ol>

		<h2>Expectations for the Company</h2>
		<p>
			According to my experience with the group, its projects and comparison with other companies I
			have worked with, I do think the company can develop in the following way in the future, and I
			would sincerely like it to do so:
		</p>

		<h3>Growth</h3>
		<p>
			This company has great potential for growth, both in terms of personnel and projects.
			Especially, the uniqueness of its organisation and the avant-garde nature of its concepts
			should be enough to convince a team of extraordinary developers to join it. However, of
			course, they need to be aware of the company.
		</p>

		<p>
			Given this, in my humble opinion, what the company needs most at the moment is to be known. I
			know there are specific actions (blog, social media, events…) to do this, but I think there
			are two important key actions that need to be taken:
		</p>

		<ol>
			<li>Branding</li>
			<p>
				The company lacks a professional and attractive corporate image. Some branding tasks have
				been solved by Constantin (well done), but the corporate image is something complex
				involving several design tasks. The perception of the company is still vague and not very
				attractive.
			</p>
			<li>Events and Conversations</li>
			<p>
				While attending events is a good way to become known, which is already done, hosting them or
				giving workshops is even better. Constantin has already done this, and I think it is a good
				way to spread the word about the company. In the new post-pandemic remote access
				environment, holding an online event with guests and audiences from all over the world may
				be ambitious, but it is possible. It could be dedicated to IA or CICD, and I’m sure a
				masterclass from Cameron would attract a lot of attention.
			</p>
			<li>Clear Information on Recruitment</li>
			<p>
				I miss the typical “Join us” or “Work with us” section online explaining what the company
				offers. On LinkedIn you can offer jobs that are automatically sent out to possible
				candidates.
			</p>
		</ol>

		<h3>Evolution of Future Projects</h3>
		<p>
			Nautilus Cyberneering’s future projects (GitQueue 2.0, IA-powered online radio) are exciting,
			unique and technologically challenging. However, I believe that such powerful and ambitious
			visions need to be somehow tied to reality with a clearly defined roadmap, evaluation and
			resource allocation as well as defining milestones, milestones and/or iterations. As
			previously stated, very fluid projects without a clear roadmap can be frustrating for some
			developers, and I would honestly like to see those projects materialised.
		</p>

		<h3>Inspiring Corporate Culture and Spreading the Word</h3>
		<p>
			I would really like to see more companies like Nautilus in terms of corporate culture and
			organisation. If projects start to materialise and the company starts to grow, it will
			certainly serve as an inspiration and even a model for other companies.
		</p>

		<h2>Conclusion</h2>
		<p>
			I want to express my gratitude for all the trust placed in me all these months, and for all
			the enjoyment and learning I have had. I honestly think that this has been one of the most
			unique job experiences I have ever had in my 20 years of career.
		</p>

		<p>
			Certainly, I’m really looking forward to seeing the exciting future that Nautilus Cyberneering
			is about to experience, and I hope I will keep contributing somehow to it.
		</p>

		<h2>Part 2 - Contributions</h2>
		<h3>Projects and Tasks</h3>
		<p>
			In this section I include a brief description of the projects I have been involved in, and the
			main task I performed in each one of them:
		</p>
	</Post>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	h2 {
		margin-top: 3rem;
		line-height: 1.2;
		color: var(--color--text);
	}

	p {
		margin-top: 1.5rem;
	}

	p,
	li {
		color: var(--color--text-secondary);
	}
</style>
