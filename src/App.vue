<template>
    <div class="home">
        <header class="page-container md-layout-column">
            <md-toolbar class="md-primary" style="position: fixed">
                <md-button class="md-icon-button" @click="showNavigation = true">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Jason's Blog</span>

                <div class="md-toolbar-section-end">
                    <md-button @click="showSidepanel = true">Favorites</md-button>
                </div>
            </md-toolbar>

            <md-drawer :md-active.sync="showNavigation">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span class="md-title">My App name</span>
                </md-toolbar>

                <md-list>
                    <md-list-item>
                    <md-icon>move_to_inbox</md-icon>
                    <span class="md-list-item-text">Inbox</span>
                    </md-list-item>

                    <md-list-item>
                    <md-icon>send</md-icon>
                    <span class="md-list-item-text">Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                    <md-icon>delete</md-icon>
                    <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                    <md-icon>error</md-icon>
                    <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
            </md-drawer>

            <md-drawer class="md-right" :md-active.sync="showSidepanel">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span class="md-title">Favorites</span>
                </md-toolbar>

                <md-list>
                    <md-list-item>
                    <span class="md-list-item-text">Abbey Christansen</span>

                    <md-button class="md-icon-button md-list-action">
                        <md-icon class="md-primary">chat_bubble</md-icon>
                    </md-button>
                    </md-list-item>

                    <md-list-item>
                    <span class="md-list-item-text">Alex Nelson</span>

                    <md-button class="md-icon-button md-list-action">
                        <md-icon class="md-primary">chat_bubble</md-icon>
                    </md-button>
                    </md-list-item>

                    <md-list-item>
                    <span class="md-list-item-text">Mary Johnson</span>

                    <md-button class="md-icon-button md-list-action">
                        <md-icon>chat_bubble</md-icon>
                    </md-button>
                    </md-list-item>
                </md-list>
            </md-drawer>
        </header>

        <md-content class="md-scrollbar">
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </md-content>

        <footer>
            <md-bottom-bar class="md-accent md-layout" md-type="shift" md-sync-route md-active-item="Home" @md-changed="checkNewPosts">
                <md-bottom-bar-item to="/home" class="md-layout-item" md-label="Home" md-icon="home"></md-bottom-bar-item>
                <md-bottom-bar-item to="/pages" class="md-layout-item" md-label="Pages" md-icon="pages"></md-bottom-bar-item>

                <md-bottom-bar-item class="md-layout-item" id="item-posts" to="/posts">
                    <md-icon class="md-bottom-bar-icon">import_contacts</md-icon>
                    <span class="md-bottom-bar-label">Posts</span>
                    <md-badge md-content="12" class="mybadge" v-if="badge" md-dense></md-badge>
                </md-bottom-bar-item>

                <md-bottom-bar-item to="/favs" class="md-layout-item" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
            </md-bottom-bar>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'BarRouter',
        data: () => {
            return {
                badge: true,
                showNavigation: false,
                showSidepanel: false
            }
        },
        methods: {
            checkNewPosts(item) {
                if (item === 'item-posts') {
                    this.badge = false
                } else {
                    this.badge = true
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    
    .home {
        overflow: hidden;
    }

    .page-container {
        overflow: hidden;
        position: relative;
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .md-content {
        margin-top: 56px;
        margin-bottom: 56px;
        height: 620px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    footer {
        width: 100%;
        position: absolute;
        bottom: 0px;
        z-index: 1;
    }
    .mybadge{
        background-color: white !important;
        color: #ff5252 !important;
        position: absolute;
        top: 10px;
        right: 10px;
        font-weight: 700;
    }


    .slide-enter {
        opacity: 0;
        -webkit-transform: translate(100%, 0);
        transform: translateX(100%);
    }
    .slide-leave-to {
        width: 414px;
        overflow: hidden;
        opacity: 0;
        -webkit-transform: translate(-100%, 0);
        transform: translateX(-100%);
        position: absolute;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 1s ease;
    }
</style>

