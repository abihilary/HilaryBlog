import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Input, Button, LinkBox, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import * as Components from "components";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section
			padding="140px 0"
			sm-padding="40px 0 40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Override slot="SectionContent" sm-align-items="center" />
			<Box width="100%">
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Mary
					<br />
					Cornell
				</Text>
			</Box>
			<Box display="flex" margin="-16px -16px -16px -16px" flex-wrap="wrap" width="100%">
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex" font="--lead">
						<Text margin="0px">
							About me
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							My name is Mary Cornell, born and raised in France.
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							I've been working as a professional photographer and videographer for more than 12 years.
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							CDS Documentary Essay Prize and Best Photographer of The Year 2019 by Sony World Photography Awards.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0 40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box max-width="360px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m David
				</Text>
				<Text font="--base">
					My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
		<Section background="--color-darkL2" padding="60px 0" sm-padding="40px 0">
			<Box
				margin="-16px -16px -16px -16px"
				padding="0px 0px 0px 0px"
				display="flex"
				width=" "
				flex-wrap="wrap"
			>
				<Box padding="16px 16px 16px 16px" display="flex" width="50%" lg-width="100%">
					<Box
						padding="98px 64px 98px 64px"
						display="flex"
						flex-direction="column"
						background="--color-light"
						color="--dark"
					>
						<Text
							as="h4"
							margin="12px 0"
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							About Zanzibar
						</Text>
						<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
							This is one of the world's greatest cultural crossroads where Africa meets the Indian Ocean.
						</Text>
					</Box>
				</Box>
				<Box display="flex" width="50%" flex-wrap="wrap" lg-width="100%">
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="100%"
						lg-width="33.3333%"
						md-width="100%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 624px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="50%"
						lg-width="33.3333%"
						md-width="50%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 296px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="50%"
						lg-width="33.3333%"
						md-width="50%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 296px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section text-align="center" padding="80px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" position="relative" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/blurred-gradient-colorful-background.jpg?v=2023-04-27T14:13:16.718Z) 50% 50% /cover repeat scroll padding-box" quarkly-title="Form-4">
			<Override slot="SectionContent" max-width="1220px" />
			<Box
				z-index="1"
				left="0px"
				top="0px"
				right="auto"
				bottom="auto"
				position="static"
				grid-template-columns="repeat(2, 1fr)"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="center"
				>
					<Text
						lg-padding="0px 0px 0px 0px"
						sm-font="normal 700 36px/1.2 --fontFamily-sans"
						margin="0px 0px 18px 0px"
						font="normal 600 42px/1.2 --fontFamily-sans"
						color="--darkL1"
						text-align="center"
						padding="0px 0 0px 0px"
						lg-width="100%"
						lg-margin="0px 0px 25px 0px"
					>
						Customer Support Center
					</Text>
					<Text
						margin="0px 0 50px 0px"
						font="normal 300 16px/1.5 --fontFamily-sansHelvetica"
						lg-margin="0px 0 50px 0px"
						text-align="center"
						display="flex"
						width="600px"
						sm-width="auto"
						md-width="100%"
					>
						Our highly trained support staff are available 24/7 to answer any questions or concerns you may have, and we work tirelessly to resolve any issues as quickly as possible.
					</Text>
				</Box>
				<Box
					position="relative"
					z-index="1"
					display="flex"
					lg-flex-direction="column"
					flex-direction="column"
					align-items="center"
				>
					<Components.QuarklycommunityKitNetlifyForm lg-margin="0px 0px 35px 0px" sm-margin="0px 0px 25px 0px" sm-width="100%">
						<Box display="flex" lg-flex-wrap="wrap" margin="0px 0px 15px 0px" flex-direction="column">
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 20px 0px"
								sm-flex-direction="column"
								sm-width="100%"
							>
								<Box min-width="10px" min-height="10px" margin="0px 15px 0px 0px" sm-margin="0px 0 15px 0px">
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										First Name
									</Text>
									<Input
										margin="0px 10px 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="First Name"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px">
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Last Name
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Last Name"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 0 0px"
								sm-flex-direction="column"
								flex-direction="column"
								sm-width="100%"
							>
								<Box
									min-width="10px"
									min-height="10px"
									margin="0px 15px 20px 0px"
									sm-margin="0px 0 15px 0px"
									width="100%"
								>
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Company
									</Text>
									<Input
										margin="0px 10px 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Company"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px" margin="0px 0px 20px 0px" width="100%">
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										E-mail
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="E-mail"
										type="email"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px" margin="0px 0px 20px 0px" width="100%">
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Phone number
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Phone number"
										type="tel"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
							</Box>
							<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
								Message
							</Text>
							<Input
								margin="0px 10px 30px 0px"
								padding="12px 16px 52px 16px"
								width="100%"
								font="--lead"
								md-max-width="none"
								border-radius="8px"
								name="Message"
								type="text"
								required
								background="rgba(255, 255, 255, 0.1)"
								border-color="--color-lightD2"
							/>
							<Button
								padding="11px 24px 11px 24px"
								font="normal 400 20px/1.5 --fontFamily-sans"
								sm-width="100%"
								focus-box-shadow="none"
								color="--light"
								background="#561dc6"
								border-radius="8px"
								hover-background="--color-darkL1"
								hover-color="--light"
								hover-transition="background-color 0.5s ease 0s"
								transition="background-color 0.1s ease 0s"
								margin="0px 0px 15px 0px"
							>
								Get App
							</Button>
							<Box min-width="10px" min-height="10px" display="flex" sm-flex-direction="column">
								<Text margin="0px 5px 0px 0px" font="normal 400 18px/1.5 --fontFamily-sansHelvetica">
									We care about your data. Read our
								</Text>
								<Link href="#" color="#561dc6" font="normal 400 18px/1.5 --fontFamily-sansHelvetica">
									privacy police
								</Link>
							</Box>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 30px 0" background="--color-dark" quarkly-title="Footer-16">
			<Box display="flex" margin="0px 0px 50px 0px" md-margin="0px 0px 45px 0px" lg-flex-direction="column">
				<LinkBox width="20%" lg-margin="0px 0px 35px 0px" lg-width="100%" href="#">
					<Image src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/bhbhb.png?v=2023-05-20T21:20:32.358Z" display="block" align-self="flex-start" width="200px" />
				</LinkBox>
				<Box
					display="flex"
					width="80%"
					lg-width="100%"
					justify-content="flex-end"
					align-items="center"
					sm-flex-direction="column"
					sm-align-items="flex-start"
					md-flex-direction="column"
					md-align-items="flex-start"
					md-display="flex"
					md-grid-gap="24px"
				>
					<Box
						align-items="flex-start"
						margin="0px 50px 0px 10px"
						lg-align-items="flex-start"
						justify-content="center"
						display="grid"
						flex-direction="row"
						flex-wrap="wrap"
						md-justify-content="flex-start"
						sm-margin="0px 0 30px 0"
						grid-template-columns="repeat(5, 1fr)"
						grid-gap="8px 0"
						sm-grid-template-columns="1fr"
						md-display="flex"
						md-grid-gap="16px"
						md-margin="0px 50px 0px 0px"
					>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="--light"
							letter-spacing="1px"
							md-margin="0px 0 0px 0"
						>
							ABOUT
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="--light"
							letter-spacing="1px"
							md-margin="0px 0 0px 0"
						>
							BLOG
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="--light"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
							letter-spacing="1px"
							md-margin="0px 0 0px 0"
						>
							JOBS
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="--light"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
							letter-spacing="1px"
							md-margin="0px 0 0px 0"
						>
							PRESS
						</Link>
						<Link
							padding="0 0 0 0"
							margin="0px 0 0px 0"
							hover-color="--light"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
							letter-spacing="1px"
						>
							PARTNERS
						</Link>
					</Box>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						grid-template-columns="repeat(5, 1fr)"
						grid-gap="16px 24px"
						md-align-self="flex-start"
						justify-items="start"
						justify-content="center"
						lg-justify-content="flex-end"
					>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaFacebook}
								size="24px"
								color="#c3c8d0"
								hover-color="--lightD2"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaInstagram}
								size="24px"
								color="#c3c8d0"
								hover-color="--lightD2"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaTwitterSquare}
								size="24px"
								color="#c3c8d0"
								hover-color="--lightD2"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				md-flex-direction="column"
				md-align-items="flex-start"
				justify-content="space-between"
				padding="30px 0px 0px 0px"
				border-width="1px 0 0 0"
				border-style="solid"
				border-color="#2c3339"
				lg-flex-direction="column"
				align-items="flex-start"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					lg-margin="0px 0px 20px 0px"
					sm-flex-direction="column"
				>
					<Box
						min-width="100px"
						min-height="100px"
						margin="0px 50px 0px 0px"
						display="flex"
						flex-direction="column"
					>
						<Text
							margin="0px 0px 25px 0px"
							font="normal 500 18px/1.2 --fontFamily-sansHelvetica"
							color="--light"
							md-margin="0px 0px 20px 0px"
							letter-spacing="1px"
						>
							CONTACTS
						</Text>
						<Link
							href="tel:+9877654321223"
							color="#c3c8d0"
							text-decoration-line="initial"
							font="normal 300 16px/1.5 --fontFamily-sans"
							display="inline-block"
							text-align="center"
							margin="0px 0px 5px 0px"
							hover-color="white"
						>
							+987 (765) 432 12 23
						</Link>
						<Link
							href="mailto:info@yourdomain.com"
							color="#c3c8d0"
							text-decoration-line="initial"
							font="normal 300 16px/1.5 --fontFamily-sans"
							display="inline-block"
							margin="0px 0px 15px 0px"
							text-align="center"
							hover-color="white"
						>
							info@yourdomain.com
						</Link>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text
							margin="0px 0px 25px 0px"
							font="normal 500 18px/1.2 --fontFamily-sansHelvetica"
							color="--light"
							md-margin="0px 0px 20px 0px"
							letter-spacing="1px"
						>
							ADDRESS
						</Text>
						<Text
							margin="0px 0px 20px 0px"
							color="#c3c8d0"
							font="normal 300 16px/1.7 --fontFamily-sans"
							border-color="#b8acac"
							md-margin="0px 0px 15px 0px"
						>
							4998 Hanover Street
							<br />
							New York, 10011
						</Text>
					</Box>
				</Box>
				<Box display="flex" md-align-self="stretch" sm-flex-direction="column">
					<Text
						font="--base"
						color="#c3c8d0"
						md-margin="0px 0px 0 0px"
						md-width="100%"
						margin="0 30px 0 0px"
					>
						© 2023 Company, Inc.{" "}
					</Text>
					<Link
						padding="0 0 0 0"
						margin="0px 0 0px 0"
						lg-margin="0px 6px 0px 0px"
						display="block"
						href="#"
						font="--base"
						text-decoration-line="initial"
						color="#c3c8d0"
						hover-color="white"
						sm-padding="0 0 15px 0"
						md-white-space="nowrap"
						sm-order="-1"
					>
						Privacy Policy
					</Link>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64ac00a7477c3a0019b4d511"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});