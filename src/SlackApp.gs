
/**
 * @type {String}
 */
var SCOPE_IDENTIFY="identify";
/**
 * @type {String}
 */
var SCOPE_READ="read";
/**
 * @type {String}
 */
var SCOPE_POST="post";
/**
 * Create an Slack API Client 
 * @param {String} token API Token via https://api.slack.com/tokens
 * @return {SlackApp} return an Slack API Client 
 */
function create(token){
  return new SlackApp(null, null, null, null, {token : token});
}
/**
 * Create an Slack API Client by ClientId
 * @param {String} team team ID
 * @param {String} clientId client id
 * @param {String} clientSecret client secret
 * @param {String[]} scopes scopes
 * @param {Object} option optional the option parameter. You can set property below.
 * <table>
 *   <tr>
 *     <td><b>Name</b></td>
 *     <td><b>Type</b></td>
 *     <td><b>Description</b></td>
 *   </tr>
 *   <tr>
 *     <td>token</td>
 *     <td><code>String</code></td>
 *     <td>The API Token via <a href="https://api.slack.com/tokens">https://api.slack.com/tokens</a></td>
 *   </tr>
 *   <tr>
 *     <td>name</td>
 *     <td><code>String</code></td>
 *     <td>The suffix name for PropertiesService key. Default : <code>""</code></td>
 *   </tr>
 * </table>
 * @return {SlackApp} return an Slack API Client 
 */
function createByClientId(team, clientId, clientSecret, scopes, option){
  return new SlackApp(team, clientId, clientSecret, scopes, option);
}
/**
 * This method helps you test your calling code.<br>
 * https://api.slack.com/methods/api.test
 * @param {Object} params you can set below.
 * <table class="arguments table table-condensed">
 *         <tbody>
 *         <tr>
 *             <td><b>Name</b></td>
 *             <td><b>Type</b></td>
 *             <td><b>Description</b></td>
 *         </tr>
 *         <tr>
 *             <td style="white-space:nowrap"><code>error</code></td>
 *             <td style="white-space:nowrap"><code>Object</code></td>
 *             <td><p>Error response to return</p></td>
 *         </tr>
 *         <tr>
 *             <td style="white-space:nowrap"><code>foo</code></td>
 *             <td style="white-space:nowrap"><code>bar</code></td>
 *             <td><p>example property to return</p></td>
 *         </tr>
 *         </tbody></table>
 * @return {Object} api result. The response includes any supplied arguments:
 *  <pre><code>
 * {
 *     "ok": true,
 *     "args": {
 *         "foo": "bar",
 *     }
 * }
 *  </code></pre>
 *  If called with an <code>error</code> argument an error response is returned:
 *  <pre><code>
 *  {
 *     "ok": false,
 *     "error": "my_error",
 *     "args": {
 *         "error": "my_error",
 *     }
 * }
 * </code></pre>
 */
function apiTest(params) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method checks authentication and tells you who you are.
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true,
 *     "url": "https:\/\/myteam.slack.com\/",
 *     "team": "My Team",
 *     "user": "cal",
 *     "team_id": "T12345",
 *     "user_id": "U12345"
 * }
 * </code></pre>
 */
function authTest() {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns a portion of messages/events from the specified channel. To read the entire history for a channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.
 * https://api.slack.com/methods/channels.history
 * @param {string} channelId Channel to fetch history for.
 * @param {Object} optParams optional
  * <table class="arguments table table-condensed">
 *         <tbody>
 *         <tr>
 *             <td><b>Name</b></td>
 *             <td><b>Type</b></td>
 *             <td><b>Description</b></td>
 *         </tr>
 *         <tr>
 *             <td style="white-space:nowrap"><code>latest</code></td>
 *             <td style="white-space:nowrap"><code>String</code></td>
 *             <td><p>Timestamp of the oldest recent seen message. like <code>1234567890.123456</code></p></td>
 *         </tr>
 *         <tr>
 *             <td style="white-space:nowrap"><code>oldest</code></td>
 *             <td style="white-space:nowrap"><code>String</code></td>
 *             <td><p>Timestamp of the latest previously seen message. like <code>1234567890.123456</code></p></td>
 *         </tr>
 *         <tr>
 *             <td style="white-space:nowrap"><code>count</code></td>
 *             <td style="white-space:nowrap"><code>Number</code></td>
 *             <td><p>Number of messages to return, between 1 and 1000. like <code>100</code></p></td>
 *         </tr>
 *         </tbody></table>
 * @return {Object} api result
 *  <pre><code>
 *  {
 *     "ok": true,
 *     "latest": "1358547726.000003",
 *     "messages": [
 *         {
 *             "type": "message",
 *             "ts": "1358546515.000008",
 *             "user": "U2147483896",
 *             "text": "Hello"
 *         },
 *         {
 *             "type": "message",
 *             "ts": "1358546515.000007",
 *             "user": "U2147483896",
 *             "text": "World",
 *             "is_starred": true,
 *         },
 *         {
 *             "type": "something_else",
 *             "ts": "1358546515.000007",
 *             "wibblr": true
 *         }
 *     ],
 *     "has_more": false
 * }
 * </code></pre>
 */
function channelsHistory(channelId, optParams) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns information about a team channel.
 * @param {string} channelId Channel to get info on
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true,
 *     "channel": {
 *         "id": "C024BE91L",
 *         "name": "fun",
 * 
 *         "created": "1360782804",
 *         "creator": "U024BE7LH",
 * 
 *         "is_archived": false,
 *         "is_general": false,
 *         "is_member": true,
 * 
 *         "members": [ … ],
 * 
 *         "topic": { … },
 *         "purpose": { … }
 * 
 *         "last_read": "1401383885.000061",
 *         "latest": { … }
 *         "unread_count": 0,
 *     }
 * }
 * </code></pre>
 */
function channelsInfo(channelId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to invite a user to a channel. The calling user must be a member of the channel.
 * @param {string} channelId Channel to invite user to.
 * @param {string} userId User to invite to channel.
 * @return {Object} api result 
 * <pre><code>
 * {
 *     "ok": true,
 *     "channel": {
 *         "id": "C024BE91L",
 *         "name": "fun",
 *         "created": "1360782804",
 *         "creator": "U024BE7LH",
 *         "is_archived": false,
 *         "is_member": true,
 *         "is_general": false,
 *         "last_read": "1401383885.000061",
 *         "latest": { … }
 *         "unread_count": 0,
 *         "members": [ … ],
 *         "topic": {
 *             "value": "Fun times",
 *             "creator": "U024BE7LV",
 *             "last_set": "1369677212"
 *         },
 *         "purpose": {
 *             "value": "This channel is for fun",
 *             "creator": "U024BE7LH",
 *             "last_set": "1360782804"
 *         }
 *     },
 * }
 * </code></pre>
 */
function channelsInvite(channelId, userId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to join a channel. If the channel does not exist, it is created.
 * @param {string} channelName Name of channel to join
 * @return {Object} api result
 *  <pre><code>
 *  {
 *     "ok": true,
 *     "channel": {
 *         "id": "C024BE91L",
 *         "name": "fun",
 *         "created": "1360782804",
 *         "creator": "U024BE7LH",
 *         "is_archived": false,
 *         "is_member": true,
 *         "is_general": false,
 *         "last_read": "1401383885.000061",
 *         "latest": { … }
 *         "unread_count": 0,
 *         "members": [ … ],
 *         "topic": {
 *             "value": "Fun times",
 *             "creator": "U024BE7LV",
 *             "last_set": "1369677212"
 *         },
 *         "purpose": {
 *             "value": "This channel is for fun",
 *             "creator": "U024BE7LH",
 *             "last_set": "1360782804"
 *         }
 *     },
 * }
 *  </code></pre>
 *  If you are already in the channel, the response is slightly different. already_in_channel will be true, and a limited channel object will be returned. This allows a client to see that the request to join GeNERaL is the same as the channel #general that the user is already in:
 *  <pre><code>
 *  {
 *     "ok": true,
 *     "already_in_channel": true,
 *     "channel": {
 *         "id": "C024BE91L",
 *         "name": "fun",
 *         "created": "1360782804",
 *         "creator": "U024BE7LH",
 *         "is_archived": false,
 *         "is_general": false
 *     }
 * }
 *  </code></pre>
 */
function channelsJoin(channelName) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method allows a user to remove another member from a team channel.
 * @param {string} channelId Channel to remove user from.
 * @param {string} userId User to remove from channel.
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true
 * }
 * </code></pre>
 */
function channelsKick(channelId, userId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to leave a channel.
 * @param {string} channelId Channel to leave
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true
 * }
 * </code></pre>
 * This method will not return an error if the user was not in the channel before it was called. Instead the response will include a not_in_channel property:
 * <pre><code>
 * {
 *     "ok": true,
 *     "not_in_channel": true
 * }
 * </code></pre>
 */
function channelsLeave(channelId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns a list of all channels in the team. This includes channels the caller is in, channels they are not currently in, and archived channels. The number of (non-deactivated) members in each channel is also returned.
 * @param {boolean} optIsExecludeArchived optional true/false
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true,
 *     "channels": [
 *         {
 *             "id": "C024BE91L",
 *             "name": "fun",
 *             "created": "1360782804",
 *             "creator": "U024BE7LH",
 *             "is_archived": false,
 *             "is_member": false,
 *             "num_members": 6,
 *             "topic": {
 *                 "value": "Fun times",
 *                 "creator": "U024BE7LV",
 *                 "last_set": "1369677212"
 *             },
 *             "purpose": {
 *                 "value": "This channel is for fun",
 *                 "creator": "U024BE7LH",
 *                 "last_set": "1360782804"
 *             }
 *         },
 *         ....
 *     ]
 * }
 * </code></pre>
 */
function channelsList(optIsExecludeArchived) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method moves the read cursor in a channel.
 * @param {string} channelId Channel to set reading cursor in.
 * @param {Number} timestamp Timestamp of the most recently seen message.
 * @return {Object} api result
 * <pre><code>
 * {
 *     "ok": true
 * } 
 * </code></pre>
 */
function channelsMark(channelId, timestamp) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to change the purpose of a channel. The calling user must be a member of the channel.
 * @param {string} channelId Channel to set the purpose of
 * @param {string} purpose The new purpose
 * @return {Object} api result
 */
function channelsSetPurpose(channelId, purpose) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to change the topic of a channel. The calling user must be a member of the channel.
 * @param {string} channelId Channel to set the topic of
 * @param {string} topic The new topic
 * @return {Object} api result
 */
function channelsSetTopic(channelId, topic) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method deletes a message from a channel.
 * @param {string} channelId Channel containing the message to be deleted.
 * @param {Number} timestamp Timestamp of the message to be deleted.
 * @return {Object} api result
 */
function chatDelete(channelId, timestamp) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method posts a message to a channel.
 * @param {string} channelId Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.
 * @param {string} text Text of the message to send. See below for an explanation of formatting.
 * @param {Object} option optional please see https://api.slack.com/methods/chat.postMessage
 * @return {Object} api result
 */
function chatPostMessage(channelId, text , option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * //alias
 * This method posts a message to a channel.
 * @param {string} channelId Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.
 * @param {string} text Text of the message to send. See below for an explanation of formatting.
 * @param {Object} option optional please see https://api.slack.com/methods/chat.postMessage
 * @return {Object} api result
 */
function postMessage(channelId, text , option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method updates a message in a channel.
 * @param {string} channelId Channel containing the message to be updated.
 * @param {Number} timestamp Timestamp of the message to be updated.
 * @param {string} text New text for the message, using the default formatting rules.
 * @return {Object} api result
 */
function chatUpdate(channelId, timestamp, text) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method lists the custom emoji for a team.
 * @return {Object} api result
 */
function emojiList() {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns information about a file in your team.
 * @param {string} fileId File to fetch info for
 * @param {Object} option optinal
 * @return {Object} api result
 */
function filesInfo(fileId, option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns a list of files within the team. It can be filtered and sliced in various ways.
 * @param {Object} option optional
 * @return {Object} api result
 */
function filesList(option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method allows you to create or upload an existing file.
 * @param {Blob} fileBlob file blob
 * @param {Object} option optional
 * @return {Object} api result
 */
function filesUpload(fileBlob, option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method creates a private group.
 * @param {string} name Name of group to create
 * @return {Object} api result
 */
function groupsCreate(name) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method takes an existing private group and performs the following steps:
 *
 * Renames the existing group (from "example" to "example-archived").
 * Archives the existing group.
 * Creates a new group with the name of the existing group.
 * Adds all members of the existing group to the new group.
 * This is useful when inviting a new member to an existing group while hiding all previous chat history from them. In this scenario you can call groups.createChild followed by groups.invite.
 *
 * The new group will have a special parent_group property pointing to the original archived group. This will only be returned for members of both groups, so will not be visible to any newly invited members.
 * @param {string} channelId Group to clone and archive.
 * @return {Object} api result
 */
function groupsCreateChild(channelId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns a portion of messages/events from the specified private group. To read the entire history for a group, call the method with no latest or oldest arguments, and then continue paging using the instructions below.
 * @param {string} channelId Group to fetch history for.
 * @param {Object} option optional
 * @return {Object} api result
 */
function groupsHistory(channelId, option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to invite a user to a private group. The calling user must be a member of the group.
 *
 * To invite a new member to a group without giving them access to the archives of the group call the groups.createChild method before inviting.
 * @param {string} channelId Private group to invite user to.
 * @param {string} userId User to invite.
 * @return {Object} api result
 */
function groupsInvite(channelId, userId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method allows a user to remove another member from a private group.
 * @param {string} channelId Group to remove user from.
 * @param {string} userId User to remove from group.
 * @return {Object} api result
 */
function groupsKick(channelId, userId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to leave a private group.
 * @param {string} channelId Group to leave
 * @return {Object} api result
 */
function groupsLeave(channelId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns a list of groups in the team that the caller is in and archived groups that the caller was in. The list of (non-deactivated) members in each group is also returned.
 * @param {Boolean} optIsExecludeArchived optional true/false Don't return archived groups.
 * @return {Object} api result
 */
function groupsList(optIsExecludeArchived) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method moves the read cursor in a private group.
 * @param {string} channelId Group to set reading cursor in.
 * @param {Number} timestamp Timestamp of the most recently seen message.
 * @return {Object} api result
 */
function groupsMark(channelId, timestamp) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to change the purpose of a private group. The calling user must be a member of the private group.
 * @param {string} channelId Private group to set the purpose of
 * @param {string} purpose The new purpose
 * @return {Object} api result
 */
function groupsSetPurpose(channelId, purpose) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method is used to change the topic of a private group. The calling user must be a member of the private group.
 * @param {string} channelId Private group to set the topic of
 * @param {string} topic The new topic
 * @return {Object} api result
 */
function groupsSetTopic(channelId, topic) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns a portion of messages/events from the specified direct message channel. To read the entire history for a direct message channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.
 * @param {string} channelId Direct message channel to fetch history for.
 * @param {Object} option optional
 * @return {Object} api result
 */
function imHistory(channelId, option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns a list of all im channels that the user has.
 * @return {Object} api result
 */
function imList() {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method moves the read cursor in a direct message channel.
 * @param {string} channelId Direct message channel to set reading cursor in.
 * @param {Number} timestamp Timestamp of the most recently seen message.
 * @return {Object} api result
 */
function imMark(channelId, timestamp) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 This method lets you manually override the calling user's presence value. Consult the presence documentation for more details.
 *
 * @return {Object} api result
 */
function presenceSetAway() {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 This method lets you manually override the calling user's presence value. Consult the presence documentation for more details.
 *
 * @return {Object} api result
 */
function presenceSetActive() {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method allows to to search both messages and files in a single call.
 * @param {string} query Search query. May contains booleans, etc.
 * @param {Object} option optional
 * @return {Object} api result
 */
function searchAll(query, option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns files matching a search query.
 * @param {string} query Search query. May contains booleans, etc.
 * @param {Object} option optional
 * @return {Object} api result
 */
function searchFiles(query, option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns messages matching a search query.
 * @param {string} query Search query. May contains booleans, etc.
 * @param {Object} option optional
 * @return {Object} api result
 */
function searchMessages(query, option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method lists the items starred by a user.
 * @param {Object} option optional
 * @return {Object} api result
 */
function starsList(option) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns information about a team member.
 * @param {string} userId User to get info on
 * @return {Object} api result
 */
function usersInfo(userId) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method returns a list of all users in the team. This includes deleted/deactivated users.
 * @return {Object} api result
 */
function usersList() {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * This method lets the slack messaging server know that the authenticated user is currently active. Consult the presence documentation for more details.
 * @return {Object} api result
 */
function usersSetActive() {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * Save access_token via code
 * @param {string} code access_code
 */
function saveAccessToken(code) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * Get Authorize url for oauth2
 * @param {Function} callback
 * @param {Object} optArg optional
 * @return {string}
 */
function getAuthorizeUrl(callback,optArg) {
    throw new Error("this method should not call direct, please call create method.")
}
/**
 * Get Authorize Callback url for oauth2
 * @param callback
 * @param optArg
 */
function getCallbackURL(callback,optArg) {
    throw new Error("this method should not call direct, please call create method.")
}

var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

(function(exports) {
  
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(target) {
        'use strict';
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert first argument to object');
        }
        
        var to = Object(target);
        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];
          if (nextSource === undefined || nextSource === null) {
            continue;
          }
          nextSource = Object(nextSource);
          
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
        return to;
      }
    });
  }
  
  var SlackApp;
  SlackApp = (function() {
    function SlackApp(team, clientId, clientSecret, scopes, option1) {
      this.team = team;
      this.clientId = clientId;
      this.clientSecret = clientSecret;
      this.scopes = scopes;
      this.option = option1 != null ? option1 : {};
      this.uox = bind(this.uox, this);
      this.getAuthorizeUrl = bind(this.getAuthorizeUrl, this);
      this.saveAccessToken = bind(this.saveAccessToken, this);
      this.getCredencial_ = bind(this.getCredencial_, this);
      this.fetch_ = bind(this.fetch_, this);
      this.usersSetActive = bind(this.usersSetActive, this);
      this.usersList = bind(this.usersList, this);
      this.usersInfo = bind(this.usersInfo, this);
      this.starsList = bind(this.starsList, this);
      this.searchMessages = bind(this.searchMessages, this);
      this.searchFiles = bind(this.searchFiles, this);
      this.searchAll = bind(this.searchAll, this);
      this.presenceSetActive = bind(this.presenceSetActive, this);
      this.presenceSetAway = bind(this.presenceSetAway, this);
      this.imMark = bind(this.imMark, this);
      this.imList = bind(this.imList, this);
      this.imHistory = bind(this.imHistory, this);
      this.groupsSetTopic = bind(this.groupsSetTopic, this);
      this.groupsSetPurpose = bind(this.groupsSetPurpose, this);
      this.groupsMark = bind(this.groupsMark, this);
      this.groupsList = bind(this.groupsList, this);
      this.groupsLeave = bind(this.groupsLeave, this);
      this.groupsKick = bind(this.groupsKick, this);
      this.groupsInvite = bind(this.groupsInvite, this);
      this.groupsHistory = bind(this.groupsHistory, this);
      this.groupsCreateChild = bind(this.groupsCreateChild, this);
      this.groupsCreate = bind(this.groupsCreate, this);
      this.filesUpload = bind(this.filesUpload, this);
      this.filesList = bind(this.filesList, this);
      this.filesInfo = bind(this.filesInfo, this);
      this.emojiList = bind(this.emojiList, this);
      this.chatUpdate = bind(this.chatUpdate, this);
      this.postMessage = bind(this.postMessage, this);
      this.chatPostMessage = bind(this.chatPostMessage, this);
      this.chatDelete = bind(this.chatDelete, this);
      this.channelsSetTopic = bind(this.channelsSetTopic, this);
      this.channelsSetPurpose = bind(this.channelsSetPurpose, this);
      this.channelsMark = bind(this.channelsMark, this);
      this.channelsList = bind(this.channelsList, this);
      this.channelsLeave = bind(this.channelsLeave, this);
      this.channelsKick = bind(this.channelsKick, this);
      this.channelsJoin = bind(this.channelsJoin, this);
      this.channelsInfo = bind(this.channelsInfo, this);
      this.channelsInvite = bind(this.channelsInvite, this);
      this.channelsHistory = bind(this.channelsHistory, this);
      this.authTest = bind(this.authTest, this);
      this.apiTest = bind(this.apiTest, this);
      this.BASE_URI = "https://slack.com";
      this.API_ENDPOINT = this.BASE_URI + "/api/";
      this.AUTH_ENDPOINT = this.BASE_URI + "/oauth/authorize";
      this.prop = PropertiesService.getUserProperties();
      if (!this.option.name) {
        this.option.name = "";
      }
      if (this.option.token) {
        this.prop.setProperty("SLACK_credencial" + this.option.name, JSON.stringify({
          "access_token": this.option.token
        }));
      }
    }

    SlackApp.prototype.apiTest = function(params) {
      if (params == null) {
        params = {};
      }
      return this.fetch_("api.test", params);
    };

    SlackApp.prototype.authTest = function() {
      return this.fetch_("auth.test");
    };

    SlackApp.prototype.channelsHistory = function(channelId, optParams) {
      if (optParams == null) {
        optParams = {};
      }
      return this.fetch_("channels.history", Object.assign({
        channel: channelId
      }, optParams));
    };

    SlackApp.prototype.channelsInvite = function(channelId, userId) {
      return this.fetch_("channels.invite", {
        channel: channelId,
        user: userId
      });
    };

    SlackApp.prototype.channelsInfo = function(channelId) {
      return this.fetch_("channels.info", {
        channel: channelId
      });
    };

    SlackApp.prototype.channelsJoin = function(channelName) {
      return this.fetch_("channels.join", {
        name: channelName
      });
    };

    SlackApp.prototype.channelsKick = function(channelId, userId) {
      return this.fetch_("channels.kick", {
        channel: channelId,
        user: userId
      });
    };

    SlackApp.prototype.channelsLeave = function(channelId) {
      return this.fetch_("channels.leave", {
        channel: channelId
      });
    };

    SlackApp.prototype.channelsList = function(optIsExecludeArchived) {
      var execludeArchived;
      if (optIsExecludeArchived == null) {
        optIsExecludeArchived = false;
      }
      execludeArchived = optIsExecludeArchived ? 1 : 0;
      return this.fetch_("channels.list", {
        channel: channelId,
        exclude_archived: execludeArchived
      });
    };

    SlackApp.prototype.channelsMark = function(channelId, timestamp) {
      return this.fetch_("channels.mark", {
        channel: channelId,
        ts: timestamp
      });
    };

    SlackApp.prototype.channelsSetPurpose = function(channelId, purpose) {
      return this.fetch_("channels.setPurpose", {
        channel: channelId,
        purpose: purpose
      });
    };

    SlackApp.prototype.channelsSetTopic = function(channelId, topic) {
      return this.fetch_("channels.setTopic", {
        channel: channelId,
        topic: topic
      });
    };

    SlackApp.prototype.chatDelete = function(channelId, timestamp) {
      return this.fetch_("chat.delete", {
        channel: channelId,
        ts: timestamp
      });
    };

    SlackApp.prototype.chatPostMessage = function(channelId, text, option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("chat.postMessage", Object.assign({},{
        channel: channelId,
        text: text
      }, option));
    };

    SlackApp.prototype.postMessage = function(channelId, text, option) {
      if (option == null) {
        option = {};
      }
      return this.chatPostMessage(channelId, text, option);
    };

    SlackApp.prototype.chatUpdate = function(channelId, timestamp, text) {
      return this.fetch_("chat.update", {
        channel: channelId,
        text: text,
        ts: timestamp
      });
    };

    SlackApp.prototype.emojiList = function() {
      return this.fetch_("emoji.list");
    };

    SlackApp.prototype.filesInfo = function(fileId, option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("files.info", Object.assign({
        file: fileId
      }, option));
    };

    SlackApp.prototype.filesList = function(option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("files.list", option);
    };

    SlackApp.prototype.filesUpload = function(fileBlob, option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("files.upload", Object.assign({
        file: fileBlob
      }, option));
    };

    SlackApp.prototype.groupsCreate = function(name) {
      return this.fetch_("groups.create", {
        name: name
      });
    };

    SlackApp.prototype.groupsCreateChild = function(channelId) {
      return this.fetch_("groups.createChild", {
        channel: channelId
      });
    };

    SlackApp.prototype.groupsHistory = function(channelId, option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("groups.history", Object.assign({
        channel: channelId
      }, option));
    };

    SlackApp.prototype.groupsInvite = function(channelId, userId) {
      return this.fetch_("groups.invite", {
        channel: channelId,
        user: userId
      });
    };

    SlackApp.prototype.groupsKick = function(channelId, userId) {
      return this.fetch_("groups.kick", {
        channel: channelId,
        user: userId
      });
    };

    SlackApp.prototype.groupsLeave = function(channelId) {
      return this.fetch_("groups.leave", {
        channel: channelId
      });
    };

    SlackApp.prototype.groupsList = function(optIsExecludeArchived) {
      var execludeArchived;
      if (optIsExecludeArchived == null) {
        optIsExecludeArchived = false;
      }
      execludeArchived = optIsExecludeArchived ? 1 : 0;
      return this.fetch_("groups.list", {
        exclude_archived: execludeArchived
      });
    };

    SlackApp.prototype.groupsMark = function(channelId, timestamp) {
      return this.fetch_("groups.mark", {
        channel: channelId,
        ts: timestamp
      });
    };

    SlackApp.prototype.groupsSetPurpose = function(channelId, purpose) {
      return this.fetch_("groups.setPurpose", {
        channel: channelId,
        purpose: purpose
      });
    };

    SlackApp.prototype.groupsSetTopic = function(channelId, topic) {
      return this.fetch_("groups.setTopic", {
        channel: channelId,
        topic: topic
      });
    };

    SlackApp.prototype.imHistory = function(channelId, option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("im.history", Object.assign({
        channel: channelId
      }, option));
    };

    SlackApp.prototype.imList = function() {
      return this.fetch_("im.list");
    };

    SlackApp.prototype.imMark = function(channelId, timestamp) {
      return this.fetch_("im.mark", {
        channel: channelId,
        ts: timestamp
      });
    };

    SlackApp.prototype.presenceSetAway = function() {
      return this.fetch_("presence.set", {
        presence: "away"
      });
    };

    SlackApp.prototype.presenceSetActive = function() {
      return this.fetch_("presence.set", {
        presence: "active"
      });
    };

    SlackApp.prototype.searchAll = function(query, option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("search.all", Object.assign({
        query: query
      }, option));
    };

    SlackApp.prototype.searchFiles = function(query, option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("search.files", Object.assign({
        query: query
      }, option));
    };

    SlackApp.prototype.searchMessages = function(query, option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("search.messages", Object.assign({
        query: query
      }, option));
    };

    SlackApp.prototype.starsList = function(option) {
      if (option == null) {
        option = {};
      }
      return this.fetch_("stars.list", option);
    };

    SlackApp.prototype.usersInfo = function(userId) {
      return this.fetch_("users.info", {
        user: userId
      });
    };

    SlackApp.prototype.usersList = function() {
      return this.fetch_("users.list");
    };

    SlackApp.prototype.usersSetActive = function() {
      return this.fetch_("users.setActive");
    };

    SlackApp.prototype.fetch_ = function(rpcMethod, param, option) {
      var access_token, opt, res;
      if (param == null) {
        param = {};
      }
      if (option == null) {
        option = {};
      }
      access_token = this.getCredencial_("access_token");
      if (access_token == null) {
        throw new Error("Please call authorize");
      }
      opt = {
        method: "POST",
        payload: param
      };
      opt.payload.token = access_token;
      res = this.uox((function(_this) {
        return function() {
          return UrlFetchApp.fetch("" + _this.API_ENDPOINT + rpcMethod, opt);
        };
      })(this));
      return JSON.parse(res.getContentText());
    };

    SlackApp.prototype.getCredencial_ = function(name) {
      var credencial;
      if (this.cache && this.cache[name]) {
        return this.cache[name];
      }
      credencial = this.prop.getProperty("SLACK_credencial" + this.option.name);
      if (credencial == null) {
        return null;
      }
      this.cache = JSON.parse(credencial);
      return this.cache[name];
    };

    SlackApp.prototype.saveAccessToken = function(code) {
      var res;
      res = this.uox((function(_this) {
        return function() {
          return UrlFetchApp.fetch(_this.API_ENDPOINT + "oauth.access", {
            method: "post",
            payload: {
              client_id: _this.clientId,
              client_secret: _this.clientSecret,
              redirect_uri: _this.prop.getProperty("SLACK_redirectURI" + _this.option.name),
              code: code
            }
          });
        };
      })(this));
      this.prop.setProperty("SLACK_credencial" + this.option.name, res.getContentText());
      return JSON.parse(res.getContentText()).access_token;
    };

    SlackApp.prototype.getAuthorizeUrl = function(callback, optArg) {
      var redirectUri;
      redirectUri = this.getCallbackURL(callback, optArg);
      this.prop.setProperty("SLACK_redirectURI" + this.option.name, redirectUri);
      return this.AUTH_ENDPOINT + "?client_id=" + this.clientId + "&scope=" + (this.scopes.join(',')) + "&response_type=code&redirect_uri=" + redirectUri;
    };

    SlackApp.prototype.getCallbackURL = function(callback, optArg) {
      var builder, stateToken, url;
      if (optArg == null) {
        optArg = {};
      }
      url = ScriptApp.getService().getUrl();
      if (url.indexOf("/exec") >= 0) {
        url = url.slice(0, -4) + 'usercallback?state=';
      } else {
        url = url.slice(0, -3) + 'usercallback?state=';
      }
      builder = ScriptApp.newStateToken().withMethod(callback);
      if (optArg.timeout) {
        builder.withTimeout(optArg.timeout);
      }
      if (optArg) {
        builder.withArgument("param", JSON.stringify(optArg));
      }
      stateToken = builder.createToken();
      return "" + url + stateToken;
    };

    SlackApp.prototype.uox = function(f, retry) {
      var count, e;
      if (retry == null) {
        retry = 3;
      }
      count = 0;
      while (true) {
        try {
          return f();
        } catch (_error) {
          e = _error;
          if (count > retry) {
            throw e;
          }
          Utilities.sleep(1000);
          count++;
        }
      }
    };

    return SlackApp;

  })();  
  return exports.SlackApp = SlackApp;
})(this);
