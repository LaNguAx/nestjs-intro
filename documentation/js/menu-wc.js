'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d3896540cac8cf1819fd736ddc74b3f067dcc298f6fd8c131fbc9efd642b9a4f61735b99853cf0282cfe9674b5cd6e34f4507dbc3e1b1e072868e131dadfa721"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d3896540cac8cf1819fd736ddc74b3f067dcc298f6fd8c131fbc9efd642b9a4f61735b99853cf0282cfe9674b5cd6e34f4507dbc3e1b1e072868e131dadfa721"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d3896540cac8cf1819fd736ddc74b3f067dcc298f6fd8c131fbc9efd642b9a4f61735b99853cf0282cfe9674b5cd6e34f4507dbc3e1b1e072868e131dadfa721"' :
                                            'id="xs-controllers-links-module-AppModule-d3896540cac8cf1819fd736ddc74b3f067dcc298f6fd8c131fbc9efd642b9a4f61735b99853cf0282cfe9674b5cd6e34f4507dbc3e1b1e072868e131dadfa721"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d3896540cac8cf1819fd736ddc74b3f067dcc298f6fd8c131fbc9efd642b9a4f61735b99853cf0282cfe9674b5cd6e34f4507dbc3e1b1e072868e131dadfa721"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d3896540cac8cf1819fd736ddc74b3f067dcc298f6fd8c131fbc9efd642b9a4f61735b99853cf0282cfe9674b5cd6e34f4507dbc3e1b1e072868e131dadfa721"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d3896540cac8cf1819fd736ddc74b3f067dcc298f6fd8c131fbc9efd642b9a4f61735b99853cf0282cfe9674b5cd6e34f4507dbc3e1b1e072868e131dadfa721"' :
                                        'id="xs-injectables-links-module-AppModule-d3896540cac8cf1819fd736ddc74b3f067dcc298f6fd8c131fbc9efd642b9a4f61735b99853cf0282cfe9674b5cd6e34f4507dbc3e1b1e072868e131dadfa721"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' :
                                            'id="xs-controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' :
                                        'id="xs-injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-986893ad494338943b1d12f4df9ea09ebdcad84644d26a5b7590c519889c03bfd7085dc0ad60878efec382e0dd4e95974bb42c34219d237b40b1c42a858b3061"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-986893ad494338943b1d12f4df9ea09ebdcad84644d26a5b7590c519889c03bfd7085dc0ad60878efec382e0dd4e95974bb42c34219d237b40b1c42a858b3061"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-986893ad494338943b1d12f4df9ea09ebdcad84644d26a5b7590c519889c03bfd7085dc0ad60878efec382e0dd4e95974bb42c34219d237b40b1c42a858b3061"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-986893ad494338943b1d12f4df9ea09ebdcad84644d26a5b7590c519889c03bfd7085dc0ad60878efec382e0dd4e95974bb42c34219d237b40b1c42a858b3061"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-986893ad494338943b1d12f4df9ea09ebdcad84644d26a5b7590c519889c03bfd7085dc0ad60878efec382e0dd4e95974bb42c34219d237b40b1c42a858b3061"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-986893ad494338943b1d12f4df9ea09ebdcad84644d26a5b7590c519889c03bfd7085dc0ad60878efec382e0dd4e95974bb42c34219d237b40b1c42a858b3061"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-986893ad494338943b1d12f4df9ea09ebdcad84644d26a5b7590c519889c03bfd7085dc0ad60878efec382e0dd4e95974bb42c34219d237b40b1c42a858b3061"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-986893ad494338943b1d12f4df9ea09ebdcad84644d26a5b7590c519889c03bfd7085dc0ad60878efec382e0dd4e95974bb42c34219d237b40b1c42a858b3061"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-21388db5c38e4f6ed87bc6762a437c1ef18301bf66fd1676d360a96cb877572ac7fa8a195549089b12dbbd445cbcd8bc6fc3a54be5a1af2a43610845cf6405a0"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-21388db5c38e4f6ed87bc6762a437c1ef18301bf66fd1676d360a96cb877572ac7fa8a195549089b12dbbd445cbcd8bc6fc3a54be5a1af2a43610845cf6405a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-21388db5c38e4f6ed87bc6762a437c1ef18301bf66fd1676d360a96cb877572ac7fa8a195549089b12dbbd445cbcd8bc6fc3a54be5a1af2a43610845cf6405a0"' :
                                            'id="xs-controllers-links-module-PostsModule-21388db5c38e4f6ed87bc6762a437c1ef18301bf66fd1676d360a96cb877572ac7fa8a195549089b12dbbd445cbcd8bc6fc3a54be5a1af2a43610845cf6405a0"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-21388db5c38e4f6ed87bc6762a437c1ef18301bf66fd1676d360a96cb877572ac7fa8a195549089b12dbbd445cbcd8bc6fc3a54be5a1af2a43610845cf6405a0"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-21388db5c38e4f6ed87bc6762a437c1ef18301bf66fd1676d360a96cb877572ac7fa8a195549089b12dbbd445cbcd8bc6fc3a54be5a1af2a43610845cf6405a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-21388db5c38e4f6ed87bc6762a437c1ef18301bf66fd1676d360a96cb877572ac7fa8a195549089b12dbbd445cbcd8bc6fc3a54be5a1af2a43610845cf6405a0"' :
                                        'id="xs-injectables-links-module-PostsModule-21388db5c38e4f6ed87bc6762a437c1ef18301bf66fd1676d360a96cb877572ac7fa8a195549089b12dbbd445cbcd8bc6fc3a54be5a1af2a43610845cf6405a0"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-72d21ca04b6b6f273ee35fc9cdd1daea3194fda05e898262b9864f26838d99b0098520ca9a40931cc0c7a704e7c7a3f2c65ee7ed7faeac2bf8d6b1ccbf555287"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-72d21ca04b6b6f273ee35fc9cdd1daea3194fda05e898262b9864f26838d99b0098520ca9a40931cc0c7a704e7c7a3f2c65ee7ed7faeac2bf8d6b1ccbf555287"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-72d21ca04b6b6f273ee35fc9cdd1daea3194fda05e898262b9864f26838d99b0098520ca9a40931cc0c7a704e7c7a3f2c65ee7ed7faeac2bf8d6b1ccbf555287"' :
                                            'id="xs-controllers-links-module-TagsModule-72d21ca04b6b6f273ee35fc9cdd1daea3194fda05e898262b9864f26838d99b0098520ca9a40931cc0c7a704e7c7a3f2c65ee7ed7faeac2bf8d6b1ccbf555287"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-72d21ca04b6b6f273ee35fc9cdd1daea3194fda05e898262b9864f26838d99b0098520ca9a40931cc0c7a704e7c7a3f2c65ee7ed7faeac2bf8d6b1ccbf555287"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-72d21ca04b6b6f273ee35fc9cdd1daea3194fda05e898262b9864f26838d99b0098520ca9a40931cc0c7a704e7c7a3f2c65ee7ed7faeac2bf8d6b1ccbf555287"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-72d21ca04b6b6f273ee35fc9cdd1daea3194fda05e898262b9864f26838d99b0098520ca9a40931cc0c7a704e7c7a3f2c65ee7ed7faeac2bf8d6b1ccbf555287"' :
                                        'id="xs-injectables-links-module-TagsModule-72d21ca04b6b6f273ee35fc9cdd1daea3194fda05e898262b9864f26838d99b0098520ca9a40931cc0c7a704e7c7a3f2c65ee7ed7faeac2bf8d6b1ccbf555287"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-72fc82460e178235b0d15e377db91f0377d6b3e358cda87417ae3bc3268d6c009c0b73dde343e4395e000a6cd1880d839ecea3548ef08f46e4f9038d5844f3df"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-72fc82460e178235b0d15e377db91f0377d6b3e358cda87417ae3bc3268d6c009c0b73dde343e4395e000a6cd1880d839ecea3548ef08f46e4f9038d5844f3df"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-72fc82460e178235b0d15e377db91f0377d6b3e358cda87417ae3bc3268d6c009c0b73dde343e4395e000a6cd1880d839ecea3548ef08f46e4f9038d5844f3df"' :
                                            'id="xs-controllers-links-module-UsersModule-72fc82460e178235b0d15e377db91f0377d6b3e358cda87417ae3bc3268d6c009c0b73dde343e4395e000a6cd1880d839ecea3548ef08f46e4f9038d5844f3df"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-72fc82460e178235b0d15e377db91f0377d6b3e358cda87417ae3bc3268d6c009c0b73dde343e4395e000a6cd1880d839ecea3548ef08f46e4f9038d5844f3df"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-72fc82460e178235b0d15e377db91f0377d6b3e358cda87417ae3bc3268d6c009c0b73dde343e4395e000a6cd1880d839ecea3548ef08f46e4f9038d5844f3df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-72fc82460e178235b0d15e377db91f0377d6b3e358cda87417ae3bc3268d6c009c0b73dde343e4395e000a6cd1880d839ecea3548ef08f46e4f9038d5844f3df"' :
                                        'id="xs-injectables-links-module-UsersModule-72fc82460e178235b0d15e377db91f0377d6b3e358cda87417ae3bc3268d6c009c0b73dde343e4395e000a6cd1880d839ecea3548ef08f46e4f9038d5844f3df"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});