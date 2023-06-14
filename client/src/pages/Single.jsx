import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_1280.jpg"
          alt=""
        />
        <div className="user">
          <img src="https://avatars.githubusercontent.com/u/22817061?v=4" alt="" />
          <div className="info">
            <span>Vander Vieira</span>
            <p>Postado a 2 dias atrás.</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque magna ac posuere ultricies. Nam sit
          amet pretium nisl. Pellentesque id urna convallis, dictum magna eget, efficitur quam. Cras ut turpis mollis,
          rutrum ligula ac, dignissim tortor. Phasellus quis pretium lectus. Etiam volutpat metus nec odio commodo, at
          aliquam leo tincidunt. Nunc consectetur interdum massa, ut posuere arcu efficitur vel. Nunc dignissim, quam ut
          blandit laoreet, dui velit egestas urna, sit amet congue felis mi id libero. Vestibulum feugiat et lorem vitae
          consequat. Duis tempus vitae tortor non tempor. Vivamus ultricies nisl finibus, bibendum metus eu, cursus
          velit. 
          
          <p>Quisque eget turpis ac orci ornare elementum non vel ex. In hac habitasse platea dictumst. Sed semper
          in ante nec tincidunt. Cras interdum dignissim felis, non cursus erat tristique id. Nulla vel nisl orci. Donec
          et tempor eros. Cras ut orci id tortor laoreet eleifend. Maecenas eget maximus felis. Donec vel turpis quam.
          Nulla vulputate tortor id euismod varius. Mauris iaculis diam massa, at molestie lectus mattis id. Nulla
          consectetur enim a risus fringilla, vitae imperdiet massa dictum. Etiam condimentum turpis non felis pretium
          finibus. Nulla luctus tortor ac odio porta viverra. Nunc maximus ex tellus, vitae ullamcorper justo porttitor
          sed. Mauris elementum, nisl sed venenatis imperdiet, ipsum libero sollicitudin augue, a ultricies mauris risus
          id lectus. Nunc laoreet nisi eget nisi laoreet, quis egestas enim malesuada. Aliquam accumsan velit nunc, nec
          porttitor nunc efficitur pellentesque. Proin elementum at nisl eget suscipit. Pellentesque sit amet fermentum
          sapien. 
          </p>
          <p>Quisque in tortor molestie, aliquet erat id, mollis lectus. Praesent porta neque ut velit suscipit
          iaculis. Nam erat tellus, tincidunt eu libero a, blandit cursus magna. Proin congue urna id porttitor tempus.
          Cras eleifend suscipit bibendum. Vestibulum nisl nunc, rutrum nec augue sed, vestibulum posuere lorem. Sed id
          bibendum justo, quis tristique nisl. Proin finibus turpis ac orci maximus, ac placerat lorem consectetur. Sed
          facilisis venenatis congue. Fusce sit amet justo id diam ultricies faucibus. Proin eleifend nulla ac ligula
          vulputate consectetur. Morbi malesuada accumsan ornare. Ut consequat est eget porttitor commodo. Suspendisse
          purus mauris, blandit et ex nec, consectetur tincidunt elit. Nullam ultricies a libero non hendrerit. Donec
          ornare magna non ipsum fermentum, in pharetra elit molestie. Fusce at varius nibh. Aliquam nec mauris eget
          eros cursus placerat et at dolor. Etiam sem erat, sollicitudin a tincidunt nec, imperdiet id orci.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
