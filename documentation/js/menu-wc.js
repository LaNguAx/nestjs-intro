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
                                            'data-bs-target="#controllers-links-module-AppModule-a8d64a07b3bd73a612c2d77e95799e63972dc6c1160d98fa9cbb078d94b137cc8e1cf10541c1416396c5b4cbb9ce8fd89aff7ab09285ee3c60495c472f7a23db"' : 'data-bs-target="#xs-controllers-links-module-AppModule-a8d64a07b3bd73a612c2d77e95799e63972dc6c1160d98fa9cbb078d94b137cc8e1cf10541c1416396c5b4cbb9ce8fd89aff7ab09285ee3c60495c472f7a23db"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a8d64a07b3bd73a612c2d77e95799e63972dc6c1160d98fa9cbb078d94b137cc8e1cf10541c1416396c5b4cbb9ce8fd89aff7ab09285ee3c60495c472f7a23db"' :
                                            'id="xs-controllers-links-module-AppModule-a8d64a07b3bd73a612c2d77e95799e63972dc6c1160d98fa9cbb078d94b137cc8e1cf10541c1416396c5b4cbb9ce8fd89aff7ab09285ee3c60495c472f7a23db"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a8d64a07b3bd73a612c2d77e95799e63972dc6c1160d98fa9cbb078d94b137cc8e1cf10541c1416396c5b4cbb9ce8fd89aff7ab09285ee3c60495c472f7a23db"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a8d64a07b3bd73a612c2d77e95799e63972dc6c1160d98fa9cbb078d94b137cc8e1cf10541c1416396c5b4cbb9ce8fd89aff7ab09285ee3c60495c472f7a23db"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a8d64a07b3bd73a612c2d77e95799e63972dc6c1160d98fa9cbb078d94b137cc8e1cf10541c1416396c5b4cbb9ce8fd89aff7ab09285ee3c60495c472f7a23db"' :
                                        'id="xs-injectables-links-module-AppModule-a8d64a07b3bd73a612c2d77e95799e63972dc6c1160d98fa9cbb078d94b137cc8e1cf10541c1416396c5b4cbb9ce8fd89aff7ab09285ee3c60495c472f7a23db"' }>
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
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' :
                                            'id="xs-controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' :
                                        'id="xs-injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-5b1fa8716c1f04a31d74d9248f98dbc52f54a308767c4767f8bd3cdbdc8ac6eae81de67a1bd0bc50c6806dee386eb27fb1cca0525218f45c5397dc7d6aa1fe88"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-5b1fa8716c1f04a31d74d9248f98dbc52f54a308767c4767f8bd3cdbdc8ac6eae81de67a1bd0bc50c6806dee386eb27fb1cca0525218f45c5397dc7d6aa1fe88"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-5b1fa8716c1f04a31d74d9248f98dbc52f54a308767c4767f8bd3cdbdc8ac6eae81de67a1bd0bc50c6806dee386eb27fb1cca0525218f45c5397dc7d6aa1fe88"' :
                                            'id="xs-controllers-links-module-UsersModule-5b1fa8716c1f04a31d74d9248f98dbc52f54a308767c4767f8bd3cdbdc8ac6eae81de67a1bd0bc50c6806dee386eb27fb1cca0525218f45c5397dc7d6aa1fe88"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-5b1fa8716c1f04a31d74d9248f98dbc52f54a308767c4767f8bd3cdbdc8ac6eae81de67a1bd0bc50c6806dee386eb27fb1cca0525218f45c5397dc7d6aa1fe88"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-5b1fa8716c1f04a31d74d9248f98dbc52f54a308767c4767f8bd3cdbdc8ac6eae81de67a1bd0bc50c6806dee386eb27fb1cca0525218f45c5397dc7d6aa1fe88"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-5b1fa8716c1f04a31d74d9248f98dbc52f54a308767c4767f8bd3cdbdc8ac6eae81de67a1bd0bc50c6806dee386eb27fb1cca0525218f45c5397dc7d6aa1fe88"' :
                                        'id="xs-injectables-links-module-UsersModule-5b1fa8716c1f04a31d74d9248f98dbc52f54a308767c4767f8bd3cdbdc8ac6eae81de67a1bd0bc50c6806dee386eb27fb1cca0525218f45c5397dc7d6aa1fe88"' }>
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
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
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
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
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